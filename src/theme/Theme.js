import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#000000", "#000000")(props),
      },
    }),
  },
};

const theme = extendTheme({ config });

export default theme;
