"""Trace a pen path through rendered script text.

Skeletonise the glyphs, turn the skeleton into a graph (nodes = endpoints and
junctions, edges = pixel chains), prune short spurs, then walk it the way a
hand would: leftmost first, straight on through crossings, small marks (dots)
after the word they belong to. Writes strokes with the local half-width.
"""
import json
import math
import sys

import numpy as np
from PIL import Image
from scipy import ndimage
from skimage.morphology import skeletonize

src, out = sys.argv[1], sys.argv[2]
img = np.array(Image.open(src).convert('L')) > 127
# A light close fills hairline gaps so thin joins stay connected.
img = ndimage.binary_closing(img, iterations=1)
dist = ndimage.distance_transform_edt(img)
skel = skeletonize(img)

H, W = skel.shape
OFFS = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]


def nbrs(p):
    y, x = p
    for dy, dx in OFFS:
        yy, xx = y + dy, x + dx
        if 0 <= yy < H and 0 <= xx < W and skel[yy, xx]:
            yield (yy, xx)


pix = set(zip(*np.nonzero(skel)))
deg = {p: sum(1 for _ in nbrs(p)) for p in pix}
nodepix = {p for p in pix if deg[p] != 2}

# Cluster adjacent node pixels into one node.
node_of = {}
nodes = []
for p in nodepix:
    if p in node_of:
        continue
    nid = len(nodes)
    stack, members = [p], []
    node_of[p] = nid
    while stack:
        q = stack.pop()
        members.append(q)
        for r in nbrs(q):
            if r in nodepix and r not in node_of:
                node_of[r] = nid
                stack.append(r)
    cy = sum(m[0] for m in members) / len(members)
    cx = sum(m[1] for m in members) / len(members)
    nodes.append({'pix': members, 'c': (cy, cx)})

edges = []  # {a, b, pts}
seen = set()
for nid, n in enumerate(nodes):
    for p in n['pix']:
        for q in nbrs(p):
            if q in node_of:
                if node_of[q] != nid and (min(nid, node_of[q]), max(nid, node_of[q]), 'direct') not in seen:
                    seen.add((min(nid, node_of[q]), max(nid, node_of[q]), 'direct'))
                    edges.append({'a': nid, 'b': node_of[q], 'pts': [p, q]})
                continue
            if q in seen:
                continue
            chain = [p, q]
            seen.add(q)
            prev, cur = p, q
            while True:
                nxt = [r for r in nbrs(cur) if r != prev and r not in chain[-3:]]
                stop = None
                for r in nxt:
                    if r in node_of and node_of[r] != None and (r not in n['pix'] or len(chain) > 3):
                        stop = r
                        break
                if stop is not None:
                    chain.append(stop)
                    edges.append({'a': nid, 'b': node_of[stop], 'pts': chain})
                    break
                nxt = [r for r in nxt if r not in seen and r not in node_of]
                if not nxt:
                    edges.append({'a': nid, 'b': None, 'pts': chain})
                    break
                prev, cur = cur, nxt[0]
                seen.add(cur)
                chain.append(cur)

# Pure loops (no node on them): start anywhere, walk round.
rest = [p for p in pix if p not in seen and p not in node_of]
rest_set = set(rest)
while rest_set:
    start = min(rest_set, key=lambda p: p[1])
    chain = [start]
    rest_set.discard(start)
    cur = start
    while True:
        nxt = [r for r in nbrs(cur) if r in rest_set]
        if not nxt:
            break
        cur = nxt[0]
        rest_set.discard(cur)
        chain.append(cur)
    chain.append(start)
    nid = len(nodes)
    nodes.append({'pix': [start], 'c': start})
    edges.append({'a': nid, 'b': nid, 'pts': chain})

for e in edges:
    if e['b'] is None:
        e['b'] = e['a']


def length(pts):
    return sum(math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]) for i in range(1, len(pts)))


def width_at(pts):
    return max(dist[p] for p in pts)


# Prune spurs: an edge to an endpoint that is shorter than the stroke is thick.
for _ in range(4):
    incid = {}
    for i, e in enumerate(edges):
        incid.setdefault(e['a'], []).append(i)
        incid.setdefault(e['b'], []).append(i)
    drop = set()
    for i, e in enumerate(edges):
        if e['a'] == e['b']:
            continue
        for end, other in ((e['a'], e['b']), (e['b'], e['a'])):
            if len(incid[end]) == 1 and len(incid[other]) >= 3:
                if length(e['pts']) < 1.6 * dist[e['pts'][len(e['pts']) // 2]] + 6:
                    drop.add(i)
    if not drop:
        break
    edges = [e for i, e in enumerate(edges) if i not in drop]
    # Merge through nodes left with exactly two edges.
    changed = True
    while changed:
        changed = False
        incid = {}
        for i, e in enumerate(edges):
            incid.setdefault(e['a'], []).append(i)
            incid.setdefault(e['b'], []).append(i)
        for nid, lst in incid.items():
            if len(lst) == 2 and lst[0] != lst[1]:
                e1, e2 = edges[lst[0]], edges[lst[1]]
                p1 = e1['pts'] if e1['b'] == nid else e1['pts'][::-1]
                a1 = e1['a'] if e1['b'] == nid else e1['b']
                p2 = e2['pts'] if e2['a'] == nid else e2['pts'][::-1]
                b2 = e2['b'] if e2['a'] == nid else e2['a']
                merged = {'a': a1, 'b': b2, 'pts': p1 + p2[1:]}
                edges = [e for i, e in enumerate(edges) if i not in lst] + [merged]
                changed = True
                break


def direction(pts, from_start=True, k=14):
    seg = pts[: k + 1] if from_start else pts[::-1][: k + 1]
    dy = seg[-1][0] - seg[0][0]
    dx = seg[-1][1] - seg[0][1]
    n = math.hypot(dx, dy) or 1
    return (dy / n, dx / n)


# Components over the edge graph.
parent = {}


def find(a):
    while parent.setdefault(a, a) != a:
        parent[a] = parent[parent[a]]
        a = parent[a]
    return a


for e in edges:
    parent[find(e['a'])] = find(e['b'])
comps = {}
for i, e in enumerate(edges):
    comps.setdefault(find(e['a']), []).append(i)
comp_list = []
for root, idx in comps.items():
    xs = [p[1] for i in idx for p in edges[i]['pts']]
    total = sum(length(edges[i]['pts']) for i in idx)
    comp_list.append({'idx': idx, 'minx': min(xs), 'maxx': max(xs), 'cx': sum(xs) / len(xs), 'len': total})

big = sorted([c for c in comp_list if c['len'] >= 120], key=lambda c: c['minx'])
small = [c for c in comp_list if c['len'] < 120]
order = []
for c in big:
    order.append(c)
    for s in sorted([s for s in small if c['minx'] <= s['cx'] <= c['maxx']], key=lambda s: s['cx']):
        order.append(s)
        small.remove(s)
order += sorted(small, key=lambda s: s['cx'])

strokes = []
for comp in order:
    unused = set(comp['idx'])
    while unused:
        # Start at the leftmost endpoint that still has an unused edge (a
        # node with one unused edge), else the leftmost node.
        cand = []
        for i in unused:
            e = edges[i]
            for end in (e['a'], e['b']):
                cnt = sum(1 for j in unused if end in (edges[j]['a'], edges[j]['b']))
                cand.append((0 if cnt == 1 else 1, nodes[end]['c'][1], end))
        cand.sort()
        cur = cand[0][2]
        stroke = []
        incoming = None
        while True:
            options = [i for i in unused if cur in (edges[i]['a'], edges[i]['b'])]
            if not options:
                break
            best, best_score, best_pts = None, None, None
            for i in options:
                e = edges[i]
                pts = e['pts'] if e['a'] == cur else e['pts'][::-1]
                d = direction(pts)
                if incoming is None:
                    score = -d[1]  # first edge: prefer heading right
                else:
                    score = -(d[0] * incoming[0] + d[1] * incoming[1])
                if best_score is None or score < best_score:
                    best, best_score, best_pts = i, score, pts
            # Do not turn back on yourself at a junction: lift the pen instead.
            if incoming is not None and best_score > 0.55:
                break
            unused.discard(best)
            e = edges[best]
            stroke += best_pts if not stroke else best_pts[1:]
            cur = e['b'] if e['a'] == cur else e['a']
            incoming = direction(best_pts, from_start=False)
            incoming = (-incoming[0], -incoming[1])
        if len(stroke) > 2:
            strokes.append({'pts': [[int(p[1]), int(p[0])] for p in stroke], 'w': [round(float(dist[p]), 1) for p in stroke]})

json.dump({'strokes': strokes}, open(out, 'w'))
print(len(nodes), 'nodes', len(edges), 'edges', len(strokes), 'strokes', [len(s['pts']) for s in strokes])
