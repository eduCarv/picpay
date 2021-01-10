import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16
  }
}))`
  background: #1e222b;
  height: 138px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;

export const HeaderTab = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
  background-color: #1e222b;
`;

export const SuggestionsBox = styled.TouchableOpacity`
    width: auto;
    height: 40px;    
    align-items: center;
    justify-content: center;        
    border-color: rgba(255, 255, 255, 0.5);
`;

export const FavoritesBox = styled.TouchableOpacity`
    width: auto;
    height: 40px;    
    align-items: center;
    justify-content: center;
    margin-left: 20px;    
    border-color: rgba(255, 255, 255, 0.5);
`;


export const SuggestionsText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;  
`;

export const FavoritesText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;  
`;

export const SuggestionsTab = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      alignItems: "center",
      paddingLeft: 16
    }
  }))`
    background: #1e222b;
    height: 138px;
  `;

export const FavoritesTab = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      alignItems: "center",
      paddingLeft: 16
    }
  }))`
    background: #1e222b;
    height: 138px;
  `;
