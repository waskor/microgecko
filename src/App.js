import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TokenList from "./components/TokenList";
import TokenInfo from "./components/TokenInfo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<TokenList />} />
          <Route path="/:tokenID" element={<TokenInfo />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
