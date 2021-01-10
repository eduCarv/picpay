import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16
  }
}))`
  background: #1b1b1b;
  height: 138px;
`;

export const Card = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  border-radius: 20px;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  margin-left: 10px;  
`;

export const CardLabel = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  width: 70px;
`;
