import styled from "styled-components/native";

export const Wrapper = styled.View`
  background: #1b1b1b;
  flex: 1;
`;

export const Container = styled.View``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const QrCodeContainer = styled.TouchableOpacity`
`;

export const ScreenTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-left: 20px;
`;

export const Card = styled.TouchableOpacity`
  height: 80px;
  width: 350px;
  border-radius: 20px;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  margin-left: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TextContainer = styled.View`
  margin-left: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
`;

export const CardDescription = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

export const MapContainer = styled.View`
  height: 200px;
  width: 90%;
  align-self: center;
  align-items: flex-start;
  border-radius: 15px;
  margin-top: 20px;  
`;

export const MapCard = styled.TouchableOpacity`
  height: 80px;
  width: 100%;  
  align-items: flex-start;
  justify-content: center;
  padding: 10px;  
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(27, 27, 27, 0.1);
  position: absolute;
`;

export const MapTextContainer = styled.View`
  margin-left: 20px;
`;

export const MapCardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
`;

export const MapCardDescription = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

export const MapImg = styled.Image`
width: 100%;
border-radius: 5px;
`;