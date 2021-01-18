import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #1b1b1b;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 80px;
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QrCodeContainer = styled.TouchableOpacity``;

export const Highlight = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  left: 20px;
  color: #fff;
`;

export const CardContainer = styled.View`
    height: 200px;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const Card = styled.TouchableOpacity`
    height: 170px;
    width: 320px;

    margin-left: 10px;
    border-radius: 15px;
    background-color: #4F5965;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
;
`;

export const Img = styled.Image`
    height: 100px;
    width: 100px;
`;

export const TextsContainer = styled.View`
    display: flex;
    flex-direction: column;


    margin-right: 35px;
`;

export const CardTitle = styled.Text`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`;

export const CardDescription = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    width: 220px;
`;


export const StoreHeader = styled.View`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 15px;
`;
export const StoreTitle = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;
export const SeeMoreButton = styled.TouchableOpacity`
`;

export const SeeMore = styled.Text`
    color: #61A96A;
`;

export const StoresContainer = styled.ScrollView.attrs(() => ({
    horizontal: false,
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        padding: 15,
    }
}))`

`;

export const Option = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 70px;
`;
export const ImgItem = styled.Image`

`;

export const OptionTexts = styled.View`
    height: 50px;
    width: 300px;

    margin-left: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const TitleItem = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;
export const Description = styled.Text`
    color: rgba(255, 255, 255, 0.7)
`;