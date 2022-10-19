import React from "react";
import {
  Flex,
  Button,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="50%">
      <Flex alignItems="center" justifyContent="center" py="4">
        <Link to="/">
          <Heading>microgecko</Heading>
        </Link>

        <Button onClick={toggleColorMode} pos="absolute" right="10">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Container>
  );
};

export default Navbar;
