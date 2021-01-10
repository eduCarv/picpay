import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  QrCodeContainer,
  SettingContainer,
} from "./styles";

import Suggestions from "../../components/Suggestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";
import SearchBar from '../../components/SearchBar';

export default function Home() {
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

          <SettingContainer>
            <AntDesign name="setting" size={30} color="#10c86e" />
          </SettingContainer>

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
        </Header>

        <SearchBar />

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
