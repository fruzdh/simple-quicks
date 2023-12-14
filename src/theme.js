import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      blue: "#2F80ED",
      black: "#4F4F4F",
      gray: "#828282",
      white: "#E0E0E0",
    },
    indicator: {
      orange: "#F8B76B",
      blue: "#8785FF",
      red: "#EB5757",
      yellow: "#F2C94C",
    },
    chats: {
      orange: {
        light: "#FCEED3",
        dark: "#E5A443",
      },
      blue: {
        light: "#EEDCFF",
        dark: "#9B51E0",
      },
      green: {
        light: "#D2F2EA",
        dark: "#43B78D",
      },
    },
    stickers: {},
  },
});

export default theme;
