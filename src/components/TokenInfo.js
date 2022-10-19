import React from "react";
import {
  Container,
  Box,
  Flex,
  Image,
  Heading,
  Divider,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";

import Navbar from "./Navbar";

import { useParams, useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

const TokenInfo = () => {
  const { tokenID } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    id,
    name,
    image,
    current_price,
    market_cap,
    ath,
    price_change_percentage_24h,
    total_volume,
    ath_change_percentage,
  } = state.tokenInfo;

  return (
    <>
      <Navbar />
      <Container>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="4"
          my="10"
          overflow="hidden"
          boxShadow="base"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Link to="/">
              <ArrowBackIcon style={{ align: "left" }} />
            </Link>
            <Flex alignItems="center" m="auto">
              <Image src={image} alt={id} boxSize="30px" mr="3" />
              <Heading as="h3" size="lg">
                {name}
              </Heading>
            </Flex>
          </Flex>
          <Divider mt="5" />
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
          >
            <GridItem colSpan={6} p="2">
              <Text as="b" fontSize="2xl">
                Price
              </Text>
              <Text fontSize="2xl">
                <span>
                  ${current_price.toLocaleString()}{" "}
                  <span
                    style={{
                      color:
                        price_change_percentage_24h < 0 ? "#ea3943" : "#16c784",
                    }}
                  >
                    {price_change_percentage_24h.toFixed(2)}%
                  </span>
                </span>
              </Text>
            </GridItem>
            <GridItem colSpan={2} p="2">
              <Text fontSize="md" as="b">
                Market Cap
              </Text>
              <Text fontSize="md">${market_cap.toLocaleString()}</Text>
            </GridItem>
            <GridItem colSpan={2} p="2">
              <Text fontSize="md" as="b">
                All Time High
              </Text>
              <Text fontSize="md">
                <span>
                  ${ath.toLocaleString()}{" "}
                  <span
                    style={{
                      color: ath_change_percentage < 0 ? "#ea3943" : "#16c784",
                    }}
                  >
                    {ath_change_percentage.toFixed(2)}%
                  </span>
                </span>
              </Text>
            </GridItem>
            <GridItem colSpan={2} p="2">
              <Text fontSize="md" as="b">
                24H Volume
              </Text>
              <Text fontSize="md">${total_volume.toLocaleString()}</Text>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default TokenInfo;
