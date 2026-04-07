# Axios Unlimited - React Application

A modern React conversion of the Axios Unlimited website with Tailwind CSS for beautiful, responsive design.

## Setup Instructions

### 1. Install Node.js
Download and install Node.js from https://nodejs.org (LTS version recommended)

### 2. Install Dependencies
Navigate to the project directory and run:
```bash
cd axios-react-app
npm install
```

### 3. Start Development Server
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

## Features

✨ **Modern React Components**
- Navigation with smooth page transitions
- Counter animation with rapid count-up effect (800ms)
- Responsive design for all devices
- Beautiful glass-morphism effects

🎨 **Tailwind CSS Styling**
- Utility-first CSS framework
- Custom gold color scheme matching original design
- Smooth animations and transitions
- Dark mode optimized design

📱 **Responsive Layout**
- Mobile-first approach
- Desktop and mobile navigation
- Touch-friendly interface

## Project Structure

```
axios-react-app/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Main navigation bar
│   │   ├── Counter.jsx         # Animated counter component
│   │   └── StatCard.jsx        # Stat card with counter
│   ├── pages/
│   │   └── HomePage.jsx        # Home page with hero and about sections
│   ├── App.jsx                 # Main app component
│   ├── index.js                # React DOM entry point
│   └── index.css               # Global styles
├── public/
│   └── index.html              # HTML template
├── package.json                # Dependencies
└── tailwind.config.js          # Tailwind configuration
```

## Key React Features Implemented

- **Counter Component**: Automatically counts from 1 to 100 in 800ms when section is visible
- **Navigation System**: Clean routing between pages
- **Responsive Navigation**: Mobile menu with hamburger icon
- **Smooth Animations**: CSS animations for fade-up effects on scroll
- **Component Reusability**: Modular component architecture

## Styling Approach

The application uses:
- **Tailwind CSS**: For utility-first styling
- **CSS Modules**: For component-specific styles
- **Custom CSS**: For complex animations and effects

All styles are defined in `src/index.css` with Tailwind configuration in `tailwind.config.js`

## Next Steps

1. Convert remaining pages (About, Practices, Framework, Insights, Contact)
2. Add form handling for contact section
3. Integrate images folder
4. Add more interactive features
5. Optimize for performance

## Support

For questions or issues, refer to:
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
