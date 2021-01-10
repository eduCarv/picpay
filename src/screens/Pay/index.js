import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import {
  Wrapper,
  Container,
  Header,
  QrCodeContainer,
  ScreenTitle,
  Card,
  TextContainer,
  CardTitle,
  CardDescription,
  MapCard,
  MapTextContainer,
  MapCardTitle,
  MapCardDescription,
  MapContainer,
  MapImg
} from "./styles";


import map from '../../images/map.png'

import Transactions from "../../components/Transactions";

export default function Pay() {
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
        </Header>
        <ScreenTitle>Transações</ScreenTitle>

        <Transactions />

        <Card style={shadow.card}>
          <Feather name="shopping-bag" size={30} color="#D5F5DE" />
          <TextContainer>
            <CardTitle>Store</CardTitle>
            <CardDescription>
              Compre o que quiser sem sair de casa
            </CardDescription>
          </TextContainer>
        </Card>

        <MapContainer>
          <MapCard style={shadow.card}>
            <MaterialCommunityIcons name="map-marker-outline" size={30} color="#D5F5DE" />
            <MapTextContainer>
              <MapCardTitle>Store</MapCardTitle>
              <MapCardDescription>
                Compre o que quiser sem sair de casa
              </MapCardDescription>
            </MapTextContainer>
          </MapCard>
          <MapImg source={map} resizeMode="contain"/>
        </MapContainer>
      </Container>
    </Wrapper>
  );
}

const shadow = StyleSheet.create({
  card: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 50, //IOS
    backgroundColor: "#1b1b1b",
    elevation: 5 // Android
  }
});
