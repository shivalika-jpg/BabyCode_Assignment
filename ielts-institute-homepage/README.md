# IELTS Pro - Modern IELTS Institute Homepage

A modern, responsive homepage for a fictional IELTS Institute built with React.js and Tailwind CSS. This project showcases a professional design with clean UI, smooth animations, and mobile-first responsive design.

## 🚀 Live Demo

Access the application at: `http://localhost:5173/`

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations and hover effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Custom Color Scheme**: Dark theme with green accents (#0F0F0F, #232D3F, #005B41, #008170)
- **Interactive Components**: Mobile-friendly navigation, animated cards, and smooth scrolling
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 🎨 Design Highlights

- **Gradient Backgrounds**: Beautiful gradient overlays using the specified color palette
- **Typography**: Inter font family for excellent readability
- **Visual Hierarchy**: Clear content structure with proper spacing and contrast
- **Micro-interactions**: Hover effects, transforms, and smooth transitions
- **Card-based Layout**: Clean, modern card designs for features and testimonials

## 📱 Sections

1. **Navigation Bar**
   - Fixed position with backdrop blur effect
   - Responsive mobile hamburger menu
   - Smooth scroll navigation links

2. **Hero Section**
   - Compelling headline with gradient text effects
   - Call-to-action buttons with hover animations
   - Statistics display and mock score card visual
   - Dark gradient background

3. **Features Section**
   - 4 service cards: Speaking Practice, Mock Tests, AI Band Score Predictor, Expert Guidance
   - Interactive hover effects with card lifting animations
   - Feature lists with checkmarks
   - Call-to-action section

4. **Testimonials Section**
   - Student reviews with star ratings
   - Profile images and achievement badges
   - Statistics showcase
   - Success story call-to-action

5. **Footer**
   - Contact information and quick links
   - Newsletter signup form
   - Social media links
   - IELTS resources section

## 🛠️ Technology Stack

- **React 18**: Modern functional components with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS 3**: Utility-first CSS framework
- **PostCSS**: CSS post-processing
- **Modern JavaScript (ES6+)**: Clean, maintainable code

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd ielts-institute-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173/`
   - The page will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Design Choices & Rationale

### Color Palette
- **Primary Dark (#0F0F0F)**: Main background for modern, professional look
- **Secondary Dark (#232D3F)**: Cards and component backgrounds for depth
- **Primary Green (#005B41)**: Accent color representing growth and success
- **Secondary Green (#008170)**: Lighter accent for interactive elements

### Layout Strategy
- **Mobile-first approach**: Designed for mobile devices first, then scaled up
- **Grid system**: CSS Grid and Flexbox for responsive layouts
- **Component-based architecture**: Reusable, maintainable React components

### User Experience
- **Visual hierarchy**: Clear content prioritization with typography and spacing
- **Smooth animations**: Subtle transitions that enhance user engagement
- **Accessibility**: Proper contrast ratios and keyboard navigation support
- **Performance**: Optimized images and efficient CSS for fast loading

### Typography
- **Inter font family**: Modern, readable font with excellent legibility
- **Responsive font sizes**: Scales appropriately across all device sizes
- **Proper line height**: Optimized for reading comfort

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section with CTA
│   ├── Features.jsx        # Services showcase
│   ├── Testimonials.jsx    # Student reviews
│   └── Footer.jsx          # Footer with contact info
├── assets/                 # Static assets
├── index.css              # Global styles and Tailwind imports
├── App.jsx                # Main app component
└── main.jsx               # Application entry point
```

## 🔧 Customization

### Colors
Update the custom colors in `tailwind.config.js`:

```javascript
colors: {
  'primary-dark': '#0F0F0F',
  'secondary-dark': '#232D3F',
  'primary-green': '#005B41',
  'secondary-green': '#008170',
}
```

### Content
Each component contains easily editable content. Modify the data arrays in each component file to update:
- Navigation links
- Feature descriptions
- Testimonials
- Contact information

### Styling
Add custom styles in `src/index.css` or modify Tailwind classes directly in components.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components are fully responsive and tested across these breakpoints.

## 🚀 Performance Optimizations

- Lazy loading for images
- Optimized CSS with Tailwind's purge functionality
- Efficient React component rendering
- Minimal bundle size with Vite's tree-shaking

## 📄 License

This project is created for educational purposes and assessment. Feel free to use it as a reference or starting point for your own projects.

## 🤝 Contributing

This is a showcase project, but suggestions and improvements are welcome!

---

**Built with ❤️ using React.js and Tailwind CSS**

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
