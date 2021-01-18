import React from "react";

import {
  Wrapper,
  Container,
  Header,
  HeaderTitleLeft,
  HeaderTitleRight,
  Notifications,
  NotificationBox,
  Description,
  TimeStamp
} from "./styles";

const onPressConfigurar = () => {
  console.log("Entra no menu configurar");
};

export default function Notification() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderTitleLeft>Notificações</HeaderTitleLeft>
          <HeaderTitleRight onPress={onPressConfigurar}>
            Configurar
          </HeaderTitleRight>
        </Header>
        <Notifications>
          {/*Aqui basicamente poderia ter um foreach dados no banco retorne um Notification passando as variáveis do banco*/}
          <NotificationBox>
            <Description>
              Identificamos um novo acesso à sua conta. Toque aqui para saber
              mais.
            </Description>
            <TimeStamp>Hoje às 22:26</TimeStamp>
          </NotificationBox>
        </Notifications>
      </Container>
    </Wrapper>
  );
}
