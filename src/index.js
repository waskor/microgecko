import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import theme from "./theme/Theme";
import { ColorModeScript } from "@chakra-ui/color-mode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
);
