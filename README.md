# Siman Studio Landing Page

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

Siman Studio is a modern web development agency landing page that showcases our services and helps generate qualified leads. The project emphasizes a magical, innovative design with a focus on user experience and conversion optimization.

## Design Specifications

### Color Palette

#### Oxford Blue

| Shade | Color (HEX) | Usage                |
| ----- | ----------- | -------------------- |
| 100   | #00040c     | Background base      |
| 200   | #010818     | Secondary background |
| 300   | #010c24     | Card backgrounds     |
| 400   | #01102f     | Section backgrounds  |
| 500   | #02153d     | Primary color        |
| 600   | #053192     | Accent color         |
| 700   | #074fe9     | Interactive elements |
| 800   | #5186fa     | Hover states         |
| 900   | #a8c3fc     | Light accents        |

#### Tekhelet

| Shade | Color (HEX) | Usage                |
| ----- | ----------- | -------------------- |
| 100   | #0f0719     | Dark backgrounds     |
| 200   | #1e0e31     | Secondary elements   |
| 300   | #2e154a     | Borders              |
| 400   | #3d1c63     | Section accents      |
| 500   | #4b227a     | Primary accent       |
| 600   | #6e32b2     | Interactive elements |
| 700   | #915ad1     | Hover states         |
| 800   | #b691e0     | Light accents        |
| 900   | #dac8f0     | Highlights           |

#### Munsell Blue

| Shade | Color (HEX) | Usage                |
| ----- | ----------- | -------------------- |
| 100   | #001f24     | Dark backgrounds     |
| 200   | #003e47     | Secondary elements   |
| 300   | #015c6b     | Borders              |
| 400   | #017b8e     | Section accents      |
| 500   | #0197af     | Primary accent       |
| 600   | #01d3f4     | Interactive elements |
| 700   | #39e4fe     | Hover states         |
| 800   | #7bedfe     | Light accents        |
| 900   | #bdf6ff     | Highlights           |

#### Turquoise

| Shade | Color (HEX) | Usage                |
| ----- | ----------- | -------------------- |
| 100   | #00302a     | Dark backgrounds     |
| 200   | #006053     | Secondary elements   |
| 300   | #00907d     | Borders              |
| 400   | #00c0a6     | Section accents      |
| 500   | #00eed0     | Primary accent       |
| 600   | #27ffe2     | Interactive elements |
| 700   | #5dffe9     | Hover states         |
| 800   | #93fff1     | Light accents        |
| 900   | #c9fff8     | Highlights           |

#### White

| Shade   | Color (HEX) | Usage          |
| ------- | ----------- | -------------- |
| 100     | #333333     | Dark text      |
| 200     | #666666     | Secondary text |
| 300     | #999999     | Muted text     |
| 400     | #cccccc     | Light text     |
| 500     | #ffffff     | Primary text   |
| 600-900 | #ffffff     | Highlights     |

#### Special Colors

| Name | Color                | Usage           |
| ---- | -------------------- | --------------- |
| Mint | oklch(0.72 0.11 178) | Special accents |

### Typography

- Primary Font: Geist Sans (provided by next/font)
- Monospace Font: Geist Mono (provided by next/font)
- Font Weights: Regular (400), Medium (500), Bold (700)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── styles/               # Global styles
│   └── globals.css       # Global CSS
└── public/               # Static assets
    ├── images/          # Image assets
    └── icons/           # Icon assets
```

## Features

- Modern, responsive design
- Interactive sections with animations
- Lead generation form
- Portfolio showcase
- Service cards with hover effects
- CRM integration (HubSpot)
- Email automation setup

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

1. **Component Structure**

   - Use TypeScript for all components
   - Follow atomic design principles
   - Implement responsive design using CSS modules

2. **Styling**

   - Use CSS variables for the color palette
   - Implement mobile-first approach
   - Maintain consistent spacing using a design system

3. **Performance**

   - Optimize images using Next.js Image component
   - Implement lazy loading for below-the-fold content
   - Minimize bundle size

4. **Accessibility**
   - Follow WCAG 2.1 guidelines
   - Ensure proper ARIA attributes
   - Maintain keyboard navigation

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

The project is configured for deployment on Vercel. Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Timeline

- Week 1: Project setup and basic structure
- Week 2: Core components development
- Week 3: Content implementation and styling
- Week 4: Integration and testing
- Week 5: Optimization and deployment

## Contact

For any questions or concerns, please contact the development team.
