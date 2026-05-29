/**
 * Safely serialize an object for embedding as JSON-LD inside a
 * `<script type="application/ld+json">` tag via dangerouslySetInnerHTML.
 *
 * Plain `JSON.stringify` is unsafe to inline in a <script> element: if any
 * string in the data contains the sequence `</script>` it closes the tag
 * early (breaking the page, or enabling injection if the data were ever
 * attacker-influenced). The U+2028 / U+2029 line separators are valid in
 * JSON but illegal in inline scripts and break parsing in some engines.
 *
 * Each unsafe character is replaced with its `\uXXXX` escape. The output is
 * still valid JSON-LD (consumers parse the escapes back transparently).
 */

// Built from char codes so the U+2028/U+2029 separators never have to appear
// literally in source (editors/tooling tend to mangle them).
const JSON_LD_UNSAFE = new RegExp(`[<>&${String.fromCharCode(0x2028, 0x2029)}]`, 'g');

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(
    JSON_LD_UNSAFE,
    (ch) => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'),
  );
}
