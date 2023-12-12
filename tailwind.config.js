/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "menu-ease": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
      colors: {
        background: "#0D0507",
        secondary: "#8C1B44",
        primary: "#D99AB1",
        text: "#F2E9EC",
        accent: "#5ABFAD",
        overlay: "rgba(13, 5, 7, 0.7)",
      },
      height: {
        page: "calc(100svh - 100px)",
      },
      fontSize: {
        h1: ["80px", { letterSpacing: "-0.0125em", fontWeight: "700" }],
        tabletH1: ["64px", { letterSpacing: "-0.0125em", fontWeight: "700" }],
        mobileH1: ["48px", { letterSpacing: "-0.0125em", fontWeight: "700" }],
        h2: ["40px", { letterSpacing: "-0.0125em", fontWeight: "700" }],
        subtitle: ["24px", { fontWeight: "500" }],
        body: ["16px", { fontWeight: "500" }],
        button: ["16px", { letterSpacing: "-0.02em", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
