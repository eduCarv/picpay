import React from "react";

import { Container, Details, Img, Title, Description } from "./styles";

import { Ionicons } from "@expo/vector-icons";

import img13 from "../../images/13.png";

export default function Banner() {
  return (
    <Container>
      <Ionicons
        name="close"
        size={20}
        color="#fff"
        style={{
          position: "absolute",
          top: 5,
          right: 5
        }}
      />
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas
          cobranças.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
