/** @type {import('tailwindcss').Config} */

// Constraint 2: Fluid Math Calculation (Mobile 375px -> Desktop 1920px -> Uncapped Ultrawide)
const fluidType = (mobilePx, desktopPx) => {
  const minViewport = 375;
  const maxViewport = 1920;
  // This clamp function starts scaling at 375px and continues scaling continuously across ultra-wide monitors 
  // without artificially capping at the 1920px mark because the max constraint is pushed to 9999px.
  return `clamp(${mobilePx}px, calc(${mobilePx}px + ${desktopPx - mobilePx} * ((100vw - ${minViewport}px) / ${maxViewport - minViewport})), 9999px)`;
};

export default {
  // Constraint 1: Architecture Lock
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Constraint 3: Absolute Light Mode
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Mapped carefully from design-tokens.tokens.json and design-lite.md
        primary: '#e14617',
        success: '#46a756',

        background: {
          DEFAULT: '#f4fffd',
          content: '#f5f5f5',
          topNav: '#f4fffd',
          mainLight: '#fff8f6',
          main: '#ffb29a'
        },

        card: {
          DEFAULT: '#ffffff',
          sidepanel: '#f9fafb'
        },

        text: {
          DEFAULT: '#0d202f',
          subtle: '#8b99a0',
          paragraph: 'rgba(51, 51, 51, 0.8)',
          section: 'rgba(51, 51, 51, 0.6)'
        },

        border: {
          soft: '#e5e7eb', // Maps to variable-collection-siepanel-card-bg-outline
          brand: '#bfdbfe'
        },

        accent: {
          orange: '#e14617',
          teal: '#004e61',
          green: '#46a756'
        },

        message: {
          inbound: '#f3f4f6',
          outbound: '#fdf7ee'
        }
      },

      fontFamily: {
        // Maps per design-lite.md rules
        sans: ['Inter', 'Helvetica', 'sans-serif'],
        serif: ['"Playfair Display"', 'Helvetica', 'serif']
      },

      fontSize: {
        // Mapping baseline defined in JSON to max derived roughly assuming 1.2-1.5x up to 1920px
        'card-hd': fluidType(11.968, 14),
        'card-stats-num': fluidType(25, 36),
        'card-stats-text': fluidType(20, 28),
        'dash-stat': fluidType(12, 14),
        'nav-link': fluidType(12.097, 14),
        'nav-section': fluidType(9.073, 11),
        'page-header': fluidType(28, 42),
        'page-sub': fluidType(14, 18),
        'section-hd': fluidType(12, 14),
        'stat-card': fluidType(15, 18)
      },

      lineHeight: {
        'card-hd': '21.119998931884766px',
        'page-sub': '20px'
      },

      boxShadow: {
        card: '0px 5px 9.199999809265137px 2px rgba(0, 0, 0, 0.06)',
        page: '0px 8px 15.399999618530273px 7px rgba(0, 0, 0, 0.06)',
        nav: '0px 3.78043794631958px 6.956005573272705px 1.51217520236969px rgba(0, 0, 0, 0.06)'
      },

      borderRadius: {
        card: '10px',
        page: '20px',
        'page-top-left': '20px'
      },

      spacing: {
        'sidebar-gap': '12px',
        'sidebar-pad': '12px',
        'topnav-h': '46px',
        // Globals defined in design-lite.md
        sidebar: '280px',
        topbar: '64px'
      },

      maxWidth: {
        canvas: '1440px'
      }
    },
  },
  plugins: [],
};
