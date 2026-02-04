# Quick Start Guide

## Step 1: Install Node.js

If you don't have Node.js installed:

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the instructions
4. Verify installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v18.17.0 and 9.6.7)

## Step 2: Install Project Dependencies

Open a terminal in this project directory and run:

```bash
npm install
```

This will install all required packages (React, TanStack Router, Tailwind CSS, etc.)

## Step 3: Start Development Server

```bash
npm run dev
```

The terminal will show a local URL (usually `http://localhost:5173`). Open this URL in your browser to see your portfolio!

## Step 4: Customize Your Content

1. **Update Personal Info**: Edit `src/data/personal.ts`
   - Add your bio, education, and work experience

2. **Update Projects**: Edit `src/data/projects.ts`
   - Modify existing projects or add new ones
   - Replace placeholder image URLs with your actual screenshots

3. **Add Screenshots**: 
   - Place your project screenshots in `public/images/`
   - Update the `screenshots` array in `src/data/projects.ts` to reference them:
     ```typescript
     screenshots: [
       "/images/my-project-screenshot-1.png",
       "/images/my-project-screenshot-2.png",
     ]
     ```

## Step 5: Build for Production

When you're ready to deploy:

```bash
npm run build
```

The production files will be in the `dist/` folder, ready to deploy to any hosting service (Vercel, Netlify, etc.)

## Troubleshooting

- **Port already in use**: If port 5173 is busy, Vite will automatically use the next available port
- **Module not found errors**: Make sure you ran `npm install` first
- **TypeScript errors**: The project uses TypeScript - make sure your editor has TypeScript support enabled

## Need Help?

Refer to the main [README.md](README.md) for more detailed information.
