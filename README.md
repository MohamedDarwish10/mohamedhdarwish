# Mohamed Darwish - Portfolio Website

A modern, SEO-friendly portfolio website showcasing Power BI dashboards and data analytics projects.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌓 Dark/Light theme with OS preference detection
- 🎠 Interactive carousels for project screenshots
- 🔍 SEO optimized with meta tags and structured data
- ⚡ Fast and performant with Vite
- 📱 Mobile-first responsive design

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation

1. **Install Node.js** (if not already installed):
   - Visit [nodejs.org](https://nodejs.org/) and download the LTS version
   - Follow the installation instructions for your operating system
   - Verify installation by running: `node --version` and `npm --version`

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - Navigate to `http://localhost:5173` (or the port shown in the terminal)

## Project Structure

```
src/
├── routes/              # TanStack Router file-based routes
│   ├── __root.tsx      # Root layout
│   ├── index.tsx       # Landing page
│   └── projects/       # Project detail pages
├── components/         # React components
│   ├── ThemeToggle.tsx
│   ├── ProjectCarousel.tsx
│   ├── ProjectCard.tsx
│   ├── Section.tsx
│   └── SEO.tsx
├── data/               # Data files
│   ├── personal.ts     # Personal info, education, experience
│   └── projects.ts     # Project data
└── styles/
    └── globals.css     # Global styles and Tailwind imports
```

## Customization

### Update Personal Information

Edit `src/data/personal.ts` to update:
- Your bio and professional summary
- Education details
- Work experience

### Update Projects

Edit `src/data/projects.ts` to:
- Add or modify projects
- Update project descriptions
- Replace placeholder images with your actual screenshots

### Replace Placeholder Images

1. Add your project screenshots to `public/images/` directory
2. Update the `screenshots` array in `src/data/projects.ts` with the actual image paths:
   ```typescript
   screenshots: [
     "/images/project1-screenshot1.png",
     "/images/project1-screenshot2.png",
   ]
   ```

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **TanStack Router** - File-based routing
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Theme management
- **Embla Carousel** - Carousel component
- **React Helmet Async** - SEO meta tags
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety

## SEO Features

- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Semantic HTML
- Optimized page titles and descriptions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

Mohamed Darwish - Data Analyst & Power BI Specialist
