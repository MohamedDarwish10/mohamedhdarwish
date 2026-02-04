import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const filesToCompress = [
    'public/images/projects/jubail-thumb.png',
    'public/images/projects/sms-2.png',
    'public/images/projects/salesforce-2.png',
    'public/images/projects/salesforce-3.png',
    'public/images/projects/jubail-4.png',
    'public/images/projects/nmc-thumb.png',
    'public/images/projects/jubail-3.png',
    'public/images/projects/jubail-1.png',
    'public/images/projects/sms-thumb.png'
];

async function compressImage(filePath) {
    try {
        const fullPath = path.resolve(filePath);
        if (!fs.existsSync(fullPath)) {
            console.log(`File not found: ${filePath}`);
            return;
        }

        const tempPath = fullPath + '.tmp';

        // Get metadata
        const metadata = await sharp(fullPath).metadata();
        console.log(`Compressing ${filePath} (${(fs.statSync(fullPath).size / 1024 / 1024).toFixed(2)} MB)...`);

        let pipeline = sharp(fullPath);

        // Resize if width > 1920 to save space, keeping aspect ratio
        if (metadata.width > 2500) {
            pipeline = pipeline.resize(2500, null, { withoutEnlargement: true });
        }

        await pipeline
            .png({ quality: 80, compressionLevel: 9, adaptiveFiltering: true })
            .toFile(tempPath);

        const oldSize = fs.statSync(fullPath).size;
        const newSize = fs.statSync(tempPath).size;

        if (newSize < oldSize) {
            fs.renameSync(tempPath, fullPath);
            console.log(`✅ Compressed ${filePath}: ${(oldSize / 1024 / 1024).toFixed(2)} MB -> ${(newSize / 1024 / 1024).toFixed(2)} MB`);
        } else {
            fs.unlinkSync(tempPath);
            console.log(`⚠️  Skipped ${filePath}: Compression didn't reduce size effectively.`);
        }

    } catch (error) {
        console.error(`❌ Error compressing ${filePath}:`, error);
    }
}

async function main() {
    for (const file of filesToCompress) {
        await compressImage(file);
    }
}

main();
