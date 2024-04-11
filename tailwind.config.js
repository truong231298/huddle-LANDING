/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        //button
        'Pink': 'hsl(322, 100%, 66%)',
        //hover button
        'LightPink': 'hsl(321, 100%, 78%)',
        //error email
        'LightRed': 'hsl(0, 100%, 63%)',
        // h1
        'VeryDarkCyan': 'hsl(192, 100%, 9%)',
        //white
        'VeryPaleBlue': 'hsl(207, 100%, 98%)'
      },
      backgroundImage:{
        "bg-footer-desktop": "url('/images/bg-footer-top-desktop.svg')",
        "bg-footer-mobile": "url('/images/bg-footer-top-mobile.svg')",

        "bg-bottom-desktop-1": "url('/images/bg-section-bottom-desktop-1.svg')",
        "bg-bottom-mobile-1": "url('/images/bg-section-bottom-mobile-1.svg')",

        "bg-bottom-desktop-2": "url('/images/bg-section-bottom-desktop-2.svg')",
        "bg-bottom-mobile-2": "url('/images/bg-section-bottom-mobile-2.svg')",

        "bg-top-desktop-1": "url('/images/bg-section-top-desktop-1.svg')",
        "bg-top-mobile-1": "url('/images/bg-section-top-mobile-1.svg')",

        "bg-top-desktop-2": "url('/images/bg-section-top-desktop-2.svg')",
        "bg-top-mobile-2": "url('/images/bg-section-top-mobile-2.svg')"

      },

    },
  },
  plugins: [],
}