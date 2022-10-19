import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Thead,
  Tr,
  Th,
  Spinner,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import TokenRow from "./TokenRow";
import Navbar from "./Navbar";

const TokenList = () => {
  const [tokens, setTokens] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(20);

  const [isDesktop] = useMediaQuery("(min-width: 900px)");

  const fetchTokens = async () => {
    if (page <= 100) {
      const cgEndpoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`;

      const res = await fetch(cgEndpoint);
      const data = await res.json();
      setTokens(data);
      setPage(page + 20);
    }
    setIsFetching(false);
  };

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
    console.log(isFetching);
  };

  useEffect(() => {
    fetchTokens();
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchTokens();
  }, [isFetching]);

  return (
    <>
      <Navbar />
      {tokens.length > 0 ? (
        <Container
          as="main"
          borderWidth="1px"
          borderRadius="lg"
          p="4"
          my="4"
          boxShadow="base"
          maxW={isDesktop ? "50%" : "80%"}
        >
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  {isDesktop && <Th>Market Cap</Th>}
                </Tr>
              </Thead>
              <Tbody>
                {tokens.map((token, idx) => (
                  <TokenRow tokenInfo={token} key={idx} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <Flex justifyContent="center" alignItems="center" height="500">
          <Spinner size="lg" />
        </Flex>
      )}
    </>
  );
};

export default TokenList;
