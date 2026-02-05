
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const projectsDir = path.resolve('public/images/projects');

async function convertImages() {
    if (!fs.existsSync(projectsDir)) {
        console.error(`Directory not found: ${projectsDir}`);
        return;
    }

    const files = fs.readdirSync(projectsDir);
    const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG files to convert...`);

    for (const file of pngFiles) {
        const filePath = path.join(projectsDir, file);
        const fileName = path.parse(file).name;
        const destPath = path.join(projectsDir, `${fileName}.jpg`);

        try {
            await sharp(filePath)
                .jpeg({ quality: 85, mozjpeg: true })
                .toFile(destPath);

            console.log(`✅ Converted: ${file} -> ${fileName}.jpg`);

            // Optional: Delete original PNG?
            // For safety, let's keep them until verification, or just delete.
            // The user asked to "change the extension", implying replacement.
            // Let's delete the PNG to avoid confusion and force usage of JPG.
            fs.unlinkSync(filePath);
            console.log(`🗑️ Deleted original: ${file}`);

        } catch (error) {
            console.error(`❌ Failed to convert ${file}:`, error);
        }
    }
}

convertImages();
