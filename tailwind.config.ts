import type { Config } from 'tailwindcss'
// TODO: font family
export default <Partial<Config>>{
  theme: {
    fontFamily: {
      'rubik-mono': ['"Rubik Mono One"'],
      'arial-black': ['"Arial black"']
    },
    extend: {
      colors: {
        primary: '#F2AED7',
        ternary: "#F582C7",
        accent_1: '#FFB3B3',
        accent_2: '#F62BE5',
        linear_from: '#CD64A3',
        linear_to: '#551F40',
        background: '#000000',
        foreground: '#5E5E5E'
      },
    },

  },
  variants: {
  },
}