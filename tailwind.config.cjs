module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        extreme: "clamp(30px, 9vw, 135px)",
        xxl: "clamp(20px, 9vw, 60px)"
      },
      textColor: {
        dark: "rgba(var(dark), <alpha value>)",
        light: "rgba(var(light), <alpha value>)",
      },
      backgroundColor: {
        dark: "rgba(var(dark), <alpha value>)",
        light: "rgba(var(light), <alpha value>)",
      },
      borderColor: {
        dark: "rgba(var(dark), <alpha value>)",
        light: "rgba(var(light), <alpha value>)",
      }, 
      stroke: {
        dark: "rgba(var(dark), <alpha value>)",
        light: "rgba(var(light), <alpha value>)",
      },
    },
  },
  plugins: [],
}