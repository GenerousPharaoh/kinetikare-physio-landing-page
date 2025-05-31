const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory containing images
const imageDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images');

// Supported formats to convert
const supportedFormats = ['.jpg', '.jpeg', '.png'];

// Recursive function to get all image files
function getAllImageFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllImageFiles(filePath, arrayOfFiles);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (supportedFormats.includes(ext)) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
}

// Convert image to WebP
async function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Skip if WebP already exists
  if (fs.existsSync(outputPath)) {
    console.log(`✓ WebP already exists: ${path.basename(outputPath)}`);
    return;
  }

  try {
    await sharp(inputPath)
      .webp({ quality: 85 }) // Adjust quality as needed (80-90 is usually good)
      .toFile(outputPath);
    
    console.log(`✓ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error converting ${path.basename(inputPath)}:`, error.message);
  }
}

// Main conversion process
async function convertAllImages() {
  console.log('🖼️  Starting WebP conversion...\n');
  
  const imageFiles = getAllImageFiles(imageDir);
  console.log(`Found ${imageFiles.length} images to process\n`);

  for (const imagePath of imageFiles) {
    await convertToWebP(imagePath);
  }

  console.log('\n✅ WebP conversion complete!');
}

// Run the conversion
convertAllImages().catch(console.error);