/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
  extend: {
    colors: {
      dark: "#0D1117",
      light: "#F5F5F5",
      textPrimary: "#E6EDF3",
      textSecondary: "#8B949E",
      accent: "#58A6FF",
      card: "#161B22",
    }
  }
},
  plugins: [],
}