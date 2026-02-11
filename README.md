# LEAD UTEC Design System

A comprehensive design system built for the LEAD UTEC organization, featuring a signature gradient palette and modern UI components.

## 🎨 Overview

This design system showcases LEAD UTEC's visual identity with:
- **Brand Colors**: Primary (#DF3124), Secondary (#921EA2), Accent (#C72A49)
- **Signature Gradient**: Linear gradient from red to purple
- **Modern Components**: Buttons, Cards, Inputs, Badges, and decorative elements
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🌿 Branches

This project uses a two-branch workflow:

- **`main`**: Production branch (live at https://lead-utec-website.vercel.app)
- **`dev`**: Development branch (for active development)

See [WORKFLOW.md](./WORKFLOW.md) for detailed Git workflow guidelines.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with v22.14.0)
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the design system.

## 📦 Components

### Button
4 variants (primary, secondary, outline, gradient) × 3 sizes (sm, md, lg)

```tsx
import { Button } from '@/components/Button';

<Button variant="gradient" size="lg">Click me</Button>
```

### Card
3 variants (default, gradient-border, gradient-bg)

```tsx
import { Card } from '@/components/Card';

<Card variant="gradient-border">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Input
Form input with label and error state

```tsx
import { Input } from '@/components/Input';

<Input 
  label="Email" 
  type="email" 
  placeholder="your@email.com"
  error="This field is required"
/>
```

### Badge
Status indicators (primary, secondary, gradient)

```tsx
import { Badge } from '@/components/Badge';

<Badge variant="gradient">v1.0</Badge>
```

### DecorativeAsterisk
LEAD UTEC's signature asterisk icon with gradient

```tsx
import { DecorativeAsterisk } from '@/components/DecorativeAsterisk';

<DecorativeAsterisk size={80} />
```

### GradientText
Text with LEAD UTEC gradient

```tsx
import { GradientText } from '@/components/GradientText';

<GradientText>LEAD UTEC</GradientText>
```

## 🎨 Color Palette

```css
--color-primary: #df3124;
--color-secondary: #921ea2;
--color-accent: #c72a49;
--color-background: #010b3d;
--color-white: #ffffff;
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Utilities**: clsx

## 📁 Project Structure

```
lead-utec-website/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main design system showcase
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── DecorativeAsterisk.tsx
│   ├── GradientText.tsx
│   └── Input.tsx
├── lib/
│   └── utils.ts           # Utility functions (cn)
└── public/
    └── images/            # Static assets
```

## 🌐 Deployment

This project is ready to be deployed on Vercel, Netlify, or any platform supporting Next.js.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 📝 License

© 2026 LEAD UTEC. All rights reserved.

---

**Built with** ❤️ **by the LEAD UTEC team**
