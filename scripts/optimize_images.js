const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Failed to load sharp directly:', e);
  process.exit(1);
}

const publicDir = path.join(__dirname, '../public');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function optimizeImages() {
  const files = getAllFiles(publicDir);
  console.log(`Found ${files.length} total files in public/modules/home.`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const stat = fs.statSync(file);
    const ext = path.extname(file).toLowerCase();
    
    if (['.jpg', '.jpeg', '.png'].includes(ext) && stat.size > 300 * 1024) {
      totalOriginal += stat.size;
      console.log(`Optimizing: ${path.basename(file)} (Original Size: ${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
      
      const buffer = fs.readFileSync(file);
      const metadata = await sharp(buffer).metadata();
      
      let pipeline = sharp(buffer);
      
      if (metadata.width && metadata.width > 1920) {
        pipeline = pipeline.resize({ width: 1920, fit: 'inside', withoutEnlargement: true });
      }
      
      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
      }
      
      const optimizedBuffer = await pipeline.toBuffer();
      fs.writeFileSync(file, optimizedBuffer);
      
      const newStat = fs.statSync(file);
      totalOptimized += newStat.size;
      console.log(` -> Optimized Size: ${(newStat.size / 1024 / 1024).toFixed(2)} MB (Saved ${(((stat.size - newStat.size) / stat.size) * 100).toFixed(1)}%)`);
    } else {
      totalOriginal += stat.size;
      totalOptimized += stat.size;
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Original Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized Total: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages().catch(console.error);
