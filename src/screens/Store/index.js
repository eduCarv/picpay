import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Wrapper,
  Container,
  Header,
  QrCodeContainer,
  Highlight,
  Title,
  CardContainer,
  Card,
  Img,
  TextsContainer,
  CardTitle,
  CardDescription,
  StoreHeader,
  StoreTitle,
  SeeMoreButton,
  SeeMore,
  StoresContainer,
  Option,
  ImgItem,
  OptionTexts,
  TitleItem,
  Description
} from "./styles";

import img from "../../images/01.png";
import img2 from "../../images/02.png";
import img3 from "../../images/03.png";
import img4 from "../../images/04.png";
import img5 from "../../images/05.png";

import SearchBar2 from "../../components/SearchBar2";

const items = [
  {
    key: String(Math.random()),
    img: img,
    title: "Netflix",
    description: "Assista a diversos filmes e séries"
  },
  {
    key: String(Math.random()),
    img: img2,
    title: "Ifood",
    description: "Pede um ifood"
  },
  {
    key: String(Math.random()),
    img: img3,
    title: "Recarga de Celular",
    description: "Vivo, Claro, Tim, Nextel, Algar, Sercomtel, Correios"
  },
  {
    key: String(Math.random()),
    img: img4,
    title: "Cartão de Transporte",
    description:
      "Bilhete único SP, Giro MetrôRio, Diadema, Ribeirão preto, Pelotas, Taubaté e Sorocaba"
  },
  {
    key: String(Math.random()),
    img: img5,
    title: "Sky",
    description: "Os melhores filmes e séries de todos tempos aqui"
  },
  {
    key: String(Math.random()),
    img: img4,
    title: "Cartão de Transporte",
    description:
      "Bilhete único SP, Giro MetrôRio, Diadema, Ribeirão preto, Pelotas, Taubaté e Sorocaba"
  },
  {
    key: String(Math.random()),
    img: img4,
    title: "Cartão de Transporte",
    description:
      "Bilhete único SP, Giro MetrôRio, Diadema, Ribeirão preto, Pelotas, Taubaté e Sorocaba"
  },
  {
    key: String(Math.random()),
    img: img4,
    title: "Cartão de Transporte",
    description:
      "Bilhete único SP, Giro MetrôRio, Diadema, Ribeirão preto, Pelotas, Taubaté e Sorocaba"
  },
  {
    key: String(Math.random()),
    img: img4,
    title: "Cartão de Transporte",
    description:
      "Bilhete único SP, Giro MetrôRio, Diadema, Ribeirão preto, Pelotas, Taubaté e Sorocaba"
  },
];

export default function Store() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <QrCodeContainer>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={30}
              color="#10c86e"
            />
          </QrCodeContainer>
          <SearchBar2 text="Quem você quer pagar?" />
        </Header>
        <Highlight>
          <Title>Destaques:</Title>
          <CardContainer>
            <Card>
              <Img source={img} />
              <TextsContainer>
                <CardTitle>R$10 de volta</CardTitle>
                <CardDescription>
                  Usando um cartão de crédito na sua primeira recarga de
                  celular, você ganha R$10 de volta.
                </CardDescription>
              </TextsContainer>
            </Card>
          </CardContainer>
          <StoreHeader>
            <StoreTitle>LOJAS</StoreTitle>
            <SeeMoreButton>
              <SeeMore>Ver mais {">"}</SeeMore>
            </SeeMoreButton>
          </StoreHeader>
          <StoresContainer>
            {items.map(item => (
              <Option>
                <ImgItem source={item.img} />
                <OptionTexts>
                  <TitleItem>{item.title}</TitleItem>
                  <Description>{item.description}</Description>
                </OptionTexts>
              </Option>
            ))}
          </StoresContainer>
        </Highlight>
      </Container>
    </Wrapper>
  );
}
