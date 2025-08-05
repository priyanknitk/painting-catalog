# Rainbow Drops - Painting Catalog

A modern, responsive painting catalog website built with Next.js and Tailwind CSS, showcasing the beautiful oil paintings of artist Niharika.

## Features

- **Modern Design**: Clean, responsive design that looks great on all devices
- **Gallery View**: Interactive gallery with modal popups for detailed viewing
- **Artist Showcase**: Dedicated sections for artist information and featured works
- **Contact Form**: Easy way for visitors to get in touch
- **Performance Optimized**: Built with Next.js for fast loading and SEO optimization
- **Mobile-First**: Responsive design that works perfectly on mobile devices

## Technology Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Styling**: Tailwind CSS 4.0
- **Language**: TypeScript
- **Images**: Next.js Image optimization
- **Deployment**: Optimized for Vercel

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Home page
│   ├── gallery/        # Gallery page
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Navigation.tsx  # Main navigation
│   ├── Footer.tsx      # Site footer
│   ├── PaintingCard.tsx# Individual painting card
│   └── PaintingModal.tsx# Painting detail modal
└── data/
    └── paintings.ts    # Painting data and types
```

## Deployment

This project is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure build settings** (auto-detected)
3. **Deploy** - Your site will be live!

### Build Commands
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`

## Customization

### Adding New Paintings
Update the `src/data/paintings.ts` file with new painting information and add corresponding images to the `public/images/` directory.

### Styling
The website uses Tailwind CSS for styling. Custom colors are defined in `tailwind.config.ts`:
- Primary: `#8B4513` (Brown)
- Secondary: `#D2691E` (Orange)
- Accent: `#F4A460` (Sandy Brown)

### Content
Update the artist information, contact details, and descriptions in the respective page components.

## Original Legacy Site

This modern version replaces the original static HTML/CSS/JavaScript website while maintaining all functionality and improving performance, accessibility, and mobile experience.

## Author

Created by Niharika - Artist and Developer

## License

This project is for portfolio and artistic showcase purposes.
