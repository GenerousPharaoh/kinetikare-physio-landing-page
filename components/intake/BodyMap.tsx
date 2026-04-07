'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BodyMapProps {
  selected: string[];
  onToggle: (area: string) => void;
}

type View = 'front' | 'back';

interface BodyRegion {
  id: string;
  label: string;
  front?: { d: string };
  back?: { d: string };
}

const bodyRegions: BodyRegion[] = [
  {
    id: 'head-neck',
    label: 'Head & Neck',
    front: { d: 'M88,18 Q100,6 112,18 Q118,30 112,48 L88,48 Q82,30 88,18 Z' },
    back: { d: 'M88,18 Q100,6 112,18 Q118,30 112,48 L88,48 Q82,30 88,18 Z' },
  },
  {
    id: 'shoulder-left',
    label: 'Left Shoulder',
    front: { d: 'M60,52 L88,50 L86,72 L58,68 Q52,60 60,52 Z' },
    back: { d: 'M60,52 L88,50 L86,72 L58,68 Q52,60 60,52 Z' },
  },
  {
    id: 'shoulder-right',
    label: 'Right Shoulder',
    front: { d: 'M112,50 L140,52 Q148,60 142,68 L114,72 Z' },
    back: { d: 'M112,50 L140,52 Q148,60 142,68 L114,72 Z' },
  },
  {
    id: 'upper-back',
    label: 'Upper Back',
    back: { d: 'M82,50 L118,50 L118,85 L82,85 Z' },
  },
  {
    id: 'chest',
    label: 'Chest',
    front: { d: 'M82,50 L118,50 L118,85 L82,85 Z' },
  },
  {
    id: 'arm-left',
    label: 'Left Arm & Elbow',
    front: { d: 'M50,70 L80,74 L76,120 L44,112 Q42,90 50,70 Z' },
    back: { d: 'M50,70 L80,74 L76,120 L44,112 Q42,90 50,70 Z' },
  },
  {
    id: 'arm-right',
    label: 'Right Arm & Elbow',
    front: { d: 'M120,74 L150,70 Q158,90 156,112 L124,120 Z' },
    back: { d: 'M120,74 L150,70 Q158,90 156,112 L124,120 Z' },
  },
  {
    id: 'lower-back',
    label: 'Lower Back',
    back: { d: 'M82,86 L118,86 L120,120 L80,120 Z' },
  },
  {
    id: 'abdomen',
    label: 'Abdomen',
    front: { d: 'M82,86 L118,86 L120,120 L80,120 Z' },
  },
  {
    id: 'wrist-hand-left',
    label: 'Left Wrist & Hand',
    front: { d: 'M38,114 L74,122 L68,152 L32,142 Z' },
    back: { d: 'M38,114 L74,122 L68,152 L32,142 Z' },
  },
  {
    id: 'wrist-hand-right',
    label: 'Right Wrist & Hand',
    front: { d: 'M126,122 L162,114 L168,142 L132,152 Z' },
    back: { d: 'M126,122 L162,114 L168,142 L132,152 Z' },
  },
  {
    id: 'hip-left',
    label: 'Left Hip',
    front: { d: 'M72,120 L100,120 L96,148 L70,148 Z' },
    back: { d: 'M72,120 L100,120 L96,148 L70,148 Z' },
  },
  {
    id: 'hip-right',
    label: 'Right Hip',
    front: { d: 'M100,120 L128,120 L130,148 L104,148 Z' },
    back: { d: 'M100,120 L128,120 L130,148 L104,148 Z' },
  },
  {
    id: 'thigh-left',
    label: 'Left Thigh',
    front: { d: 'M68,150 L96,150 L92,200 L72,200 Z' },
    back: { d: 'M68,150 L96,150 L92,200 L72,200 Z' },
  },
  {
    id: 'thigh-right',
    label: 'Right Thigh',
    front: { d: 'M104,150 L132,150 L128,200 L108,200 Z' },
    back: { d: 'M104,150 L132,150 L128,200 L108,200 Z' },
  },
  {
    id: 'knee-left',
    label: 'Left Knee',
    front: { d: 'M70,200 L94,200 L92,222 L72,222 Z' },
    back: { d: 'M70,200 L94,200 L92,222 L72,222 Z' },
  },
  {
    id: 'knee-right',
    label: 'Right Knee',
    front: { d: 'M106,200 L130,200 L128,222 L108,222 Z' },
    back: { d: 'M106,200 L130,200 L128,222 L108,222 Z' },
  },
  {
    id: 'lower-leg-left',
    label: 'Left Lower Leg',
    front: { d: 'M72,224 L92,224 L88,270 L76,270 Z' },
    back: { d: 'M72,224 L92,224 L88,270 L76,270 Z' },
  },
  {
    id: 'lower-leg-right',
    label: 'Right Lower Leg',
    front: { d: 'M108,224 L128,224 L124,270 L112,270 Z' },
    back: { d: 'M108,224 L128,224 L124,270 L112,270 Z' },
  },
  {
    id: 'ankle-foot-left',
    label: 'Left Ankle & Foot',
    front: { d: 'M74,272 L90,272 L88,296 L70,296 Z' },
    back: { d: 'M74,272 L90,272 L88,296 L70,296 Z' },
  },
  {
    id: 'ankle-foot-right',
    label: 'Right Ankle & Foot',
    front: { d: 'M110,272 L126,272 L130,296 L112,296 Z' },
    back: { d: 'M110,272 L126,272 L130,296 L112,296 Z' },
  },
];

export default function BodyMap({ selected, onToggle }: BodyMapProps) {
  const [view, setView] = useState<View>('front');
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const visibleRegions = bodyRegions.filter((r) => r[view]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* View Toggle */}
      <div className="inline-flex rounded-lg bg-slate-100 p-1 gap-1">
        {(['front', 'back'] as View[]).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            className={cn(
              'px-5 py-2 rounded-md text-sm font-medium transition-all duration-200',
              view === v
                ? 'bg-white text-[#1A2036] shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            )}
          >
            {v === 'front' ? 'Front' : 'Back'}
          </button>
        ))}
      </div>

      {/* SVG Body */}
      <div className="relative w-full max-w-[220px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: view === 'front' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: view === 'front' ? 20 : -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 200 310" className="w-full h-auto">
              {/* Body outline silhouette */}
              <path
                d="M100,10 Q115,8 118,20 Q122,35 118,48 L140,52 Q155,58 152,72 Q158,90 156,115 L168,142 L132,155 L130,148 Q135,130 130,120 L120,120 L122,150 L132,200 L130,224 L126,272 L132,298 L108,298 L110,272 L108,224 L106,200 L104,150 L100,120 L96,150 L94,200 L92,224 L88,272 L70,298 L68,298 L74,272 L70,224 L68,200 L78,150 L80,120 L70,120 Q65,130 70,148 L68,155 L32,142 L44,115 Q42,90 48,72 Q45,58 60,52 L82,48 Q78,35 82,20 Q85,8 100,10 Z"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="1.5"
                className="opacity-50"
              />

              {/* Interactive regions */}
              {visibleRegions.map((region) => {
                const pathData = region[view]!.d;
                const isSelected = selected.includes(region.id);
                const isHovered = hoveredArea === region.id;

                return (
                  <motion.path
                    key={region.id}
                    d={pathData}
                    fill={
                      isSelected
                        ? 'rgba(176, 141, 87, 0.35)'
                        : isHovered
                        ? 'rgba(176, 141, 87, 0.15)'
                        : 'rgba(176, 141, 87, 0.04)'
                    }
                    stroke={isSelected ? '#B08D57' : isHovered ? '#B08D57' : 'rgba(176, 141, 87, 0.2)'}
                    strokeWidth={isSelected ? 2 : 1}
                    className="cursor-pointer transition-colors"
                    onClick={() => onToggle(region.id)}
                    onMouseEnter={() => setHoveredArea(region.id)}
                    onMouseLeave={() => setHoveredArea(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
                  />
                );
              })}
            </svg>
          </motion.div>
        </AnimatePresence>

        {/* Hover label */}
        <AnimatePresence>
          {hoveredArea && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1A2036] text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap pointer-events-none shadow-lg"
            >
              {bodyRegions.find((r) => r.id === hoveredArea)?.label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected areas as tags */}
      {selected.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="flex flex-wrap gap-2 justify-center w-full mt-1"
        >
          {selected.map((id) => {
            const region = bodyRegions.find((r) => r.id === id);
            return (
              <motion.button
                key={id}
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => onToggle(id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#B08D57]/10 text-[#8B7142] border border-[#B08D57]/20 hover:bg-[#B08D57]/20 transition-colors"
              >
                {region?.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                  <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      <p className="text-xs text-slate-400 text-center mt-1">
        Tap the areas where you feel pain or discomfort
      </p>
    </div>
  );
}
