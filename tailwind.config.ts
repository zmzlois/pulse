import type { Config } from "tailwindcss";
// TODO: font family
export default <Partial<Config>>{
  theme: {
    fontFamily: {
      "rubik-mono": ['"Rubik Mono One"'],
      "arial-black": ['"Arial black"'],
    },
    extend: {
      colors: {
        primary: "#F2AED7",
        ternary: "#F582C7",
        accent_1: "#FFB3B3",
        accent_2: "#F62BE5",
        linear_from: "#CD64A3",
        linear_to: "#551F40",
        background: "#000000",
        foreground: "#5E5E5E",
      },
      animation: {
        "go-up-16": "go-up-16 cubic-bezier(.96,-0.22,.59,.94) 1s forwards",
        "go-up-8": "go-up-8 cubic-bezier(.96,-0.22,.59,.94) 1s forwards",
        "go-down": "go-down cubic-bezier(.96,-0.22,.59,.94) 1s forwards",
      },
      keyframes: {
        "go-up-16": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-5rem)",
          },
        },
        "go-up-8": {
          "0%": {
            transform: "translateY(11.6rem)",
          },
          "100%": {
            transform: "translateY(9.2rem)",
          },
        },
        "go-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-5rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      variants: {},
    },
  },
};
