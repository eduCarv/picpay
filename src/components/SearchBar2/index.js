import React from "react";

import { Container, InputContainer, BoxButtonSearch, Text } from "./styles";

import { Ionicons } from "@expo/vector-icons";

export default function SearchBar2(props) {
  return (
    <Container>
      <InputContainer>
        <BoxButtonSearch>
          <Ionicons name="search-outline" size={30} color="#fff" />
        </BoxButtonSearch>
        <Text>{props.text}</Text>
      </InputContainer>
    </Container>
  );
}
