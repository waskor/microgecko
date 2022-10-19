import React from "react";
import {
  Container,
  Box,
  Tr,
  Td,
  Image,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TokenRow = (props) => {
  const navigate = useNavigate();

  const color = useColorModeValue("gray.100", "gray.700");

  return (
    <Tr
      onClick={() =>
        navigate("/" + props.tokenInfo.id, {
          state: { tokenInfo: props.tokenInfo },
        })
      }
      _hover={{
        background: color,
        cursor: "pointer",
      }}
    >
      <Td>{props.tokenInfo.market_cap_rank}</Td>
      <Td>
        <Flex alignItems="center">
          <Image
            src={props.tokenInfo.image}
            alt={props.tokenInfo.id}
            boxSize="30px"
            mr="3"
          />
          <Text>{props.tokenInfo.name}</Text>
        </Flex>
      </Td>
      <Td>
        $
        {props.tokenInfo.current_price < 0.0001
          ? props.tokenInfo.current_price.toFixed(6) // Shiba workaround lol
          : props.tokenInfo.current_price.toLocaleString()}
      </Td>
      <Td>${props.tokenInfo.market_cap.toLocaleString()}</Td>
    </Tr>
  );
};

export default TokenRow;
