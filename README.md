# Nalanda Radiance Clock Lamp Website

A beautiful, heritage-inspired website for Nalanda Radiance Clock Lamp products, drawing inspiration from the ancient architecture of Nalanda Gedige.

## 🎨 Design System

### Color Palette

| Use | Color | Hex | Description |
|-----|-------|-----|-------------|
| Primary | 🟤 Deep Stone Brown | `#4E3629` | Inspired by ancient stone architecture |
| Secondary | 🟠 Warm Sandstone | `#C6A57B` | Reflects the sandstone texture of Gedige |
| Accent | 🟡 Heritage Gold | `#D4AF37` | Adds a luxurious, traditional touch |
| Background Light | ⚪ Ivory / Off-white | `#FDF8F2` | Keeps content clean, breathable |
| Text Dark | ⚫ Charcoal Black | `#2C2C2C` | Modern readability, elegance |
| Text Light | ⚪ Warm Grey | `#9A9A9A` | For subtitles, descriptions |

### Typography

- **Headings**: Playfair Display (serif) - Classical serif, adds heritage feel
- **Body Text**: Lato (sans-serif) - Clean and modern sans-serif
- **Accent/Quotes**: Great Vibes (cursive) - For quotes or elegant highlights

### Design Principles

- **Minimalist layout** with generous white space
- **Subtle scroll animations** (fade-in, slide-in) for elegant feel
- **Rounded corners** and gold/sandstone borders
- **Heritage-inspired shadows** and textures
- **Modern integration** with traditional aesthetics

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ (recommended: 18+)
- npm or yarn
- Gmail account for email functionality

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clock-lamp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```
   
   **Note:** For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an App Password (not your regular password)
   - Use the App Password in EMAIL_PASS

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
clock-lamp/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and design system
│   │   ├── layout.js            # Root layout with fonts and metadata
│   │   └── page.js              # Homepage
│   └── components/
│       ├── Button.js            # Reusable button component
│       ├── Card.js              # Reusable card component
│       └── Header.js            # Navigation header
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
└── README.md                    # This file
```

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **Heritage-Inspired**: Design system based on Nalanda Gedige architecture
- **Modern UI**: Clean, minimalist interface with subtle animations
- **Accessible**: WCAG compliant with proper focus states and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions
- **Contact Form**: Functional contact form that sends emails to kalinidwidhanage@gmail.com

## 🎨 Components

### Button Component
```jsx
<Button variant="primary" size="large">
  Shop Now
</Button>
```

**Variants**: `primary`, `accent`, `outline`, `dark`
**Sizes**: `small`, `medium`, `large`

### Card Component
```jsx
<Card variant="default" animate>
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

**Variants**: `default`, `elevated`, `accent`, `dark`
**Props**: `animate` for hover animations

### Header Component
```jsx
<Header />
```

Includes responsive navigation and mobile menu.

## 🎭 Animations

- `animate-fade-in`: Smooth fade-in animation
- `animate-slide-up`: Slide up from bottom
- `animate-slide-in`: Slide in from left
- Hover effects on cards and buttons

## 🎨 Custom CSS Classes

- `.heading-primary`: Primary heading styles
- `.heading-secondary`: Secondary heading styles
- `.text-accent`: Accent text styles
- `.btn-primary`: Primary button styles
- `.btn-accent`: Accent button styles

## 📱 Responsive Breakpoints

- **Mobile**: 0-768px
- **Tablet**: 768px-1024px
- **Desktop**: 1024px+

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any other Next.js-compatible platform.

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Nalanda Gedige temple architecture
- Fonts from Google Fonts (Playfair Display, Lato, Great Vibes)
- Icons from various sources
- Community contributions and feedback
