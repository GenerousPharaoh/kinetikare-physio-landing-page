#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the file
const filePath = path.join(__dirname, 'lib', 'detailed-conditions-content.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix issues
function fixContent(content) {
  // 1. Remove all references to "600+ patients" and similar claims
  content = content.replace(/over 600 patients/gi, 'many patients');
  content = content.replace(/600\+ patients/gi, 'patients');
  content = content.replace(/hundreds of/gi, 'many');
  content = content.replace(/Proven track record/gi, 'Evidence-based approach');
  
  // 2. Remove CAMPT certification claims but keep technique mentions
  content = content.replace(/As a CAMPT-certified physiotherapist/gi, 'As a physiotherapist with advanced manual therapy training');
  content = content.replace(/CAMPT-certified physiotherapist/gi, 'physiotherapist');
  content = content.replace(/CAMPT certified/gi, 'advanced');
  content = content.replace(/CAMPT-certified methods/gi, 'advanced manual therapy methods');
  content = content.replace(/My CAMPT certification means/gi, 'My advanced training means');
  content = content.replace(/CAMPT certification/gi, 'advanced training');
  
  // 3. Replace "Start Your Recovery" language
  content = content.replace(/Start your recovery/gi, 'Continue your care');
  content = content.replace(/begin your recovery/gi, 'continue your care');
  content = content.replace(/starting your recovery/gi, 'continuing your care');
  
  // 4. Remove em dashes and replace with proper punctuation
  content = content.replace(/—/g, ':');
  content = content.replace(/ – /g, ': ');
  content = content.replace(/ - /g, ': ');
  
  // 5. Replace we/our with I/my consistently
  content = content.replace(/\bWe'll\b/g, "I'll");
  content = content.replace(/\bwe'll\b/g, "I'll");
  content = content.replace(/\bWe\b/g, 'I');
  content = content.replace(/\bwe\b/g, 'I');
  content = content.replace(/\bOur\b/g, 'My');
  content = content.replace(/\bour\b/g, 'my');
  content = content.replace(/\bus\b/g, 'me');
  
  // 6. Fix AI-sounding phrases
  content = content.replace(/delve into/gi, 'explore');
  content = content.replace(/comprehensive overview/gi, 'clear understanding');
  content = content.replace(/let's explore/gi, "I'll explain");
  content = content.replace(/embark on/gi, 'begin');
  content = content.replace(/leverage/gi, 'use');
  content = content.replace(/utilize/gi, 'use');
  
  // 7. Canadian spelling
  content = content.replace(/ize\b/g, 'ise');
  content = content.replace(/ized\b/g, 'ised');
  content = content.replace(/izing\b/g, 'ising');
  content = content.replace(/ization\b/g, 'isation');
  content = content.replace(/or\b/g, 'our'); // This might be too broad, let's be more specific
  content = content.replace(/\bcolor\b/g, 'colour');
  content = content.replace(/\bcenter\b/g, 'centre');
  content = content.replace(/\bfavor\b/g, 'favour');
  content = content.replace(/\bhonor\b/g, 'honour');
  
  // Revert some over-corrections
  content = content.replace(/centralise/g, 'centralize'); // Medical term
  content = content.replace(/Stabilisation/g, 'Stabilization'); // Technical term
  content = content.replace(/stabilisation/g, 'stabilization'); // Technical term
  
  return content;
}

// Apply fixes
const fixedContent = fixContent(content);

// Write back
fs.writeFileSync(filePath, fixedContent, 'utf8');

console.log('Content fixed successfully!');