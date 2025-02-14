/** @type {import('tailwindcss').Config, import ('daisyui').daisyui} */
export default {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Default sans-serif font
        body: ["Poppins", "sans-serif"], // Custom body font
        heading: ["Poppins", "sans-serif"], // Custom heading font
      },
      fontSize: {
        sm: "0.875rem", // Small text (14px)
        base: "1rem", // Default text size (16px)
        lg: "1.125rem", // Large text (18px)
        xl: "1.25rem", // Extra large text (20px)
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryText: "#A3E1FA", // Light Blue (Primary Text)
        primary: "#0D6074", // Dark Teal (Primary BG)
        white: "#FFFFFF", 
        gray: "#DEDEDE", // Light Gray
        black70: "rgba(0, 0, 0, 0.7)", // 70% Black
        darkGray: "#4A4A4A", // Dark Gray
        primary70: "rgba(163, 225, 250, 0.7)", // 70% Primary
        black: "#000000",
      },
    },
  },
  
  plugins: [require("daisyui")],
};
