import styled from "styled-components/native";

export const Wrapper = styled.View`
  background: #1b1b1b;
  flex: 1;
`;

export const Container = styled.View`

`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;  

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleLeft = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #888A96;
`;

export const HeaderTitleRight = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #589A62;
`;


export const Notifications = styled.View`
    display: flex;
    flex-direction: column;
    background-color: #162F20;
    align-items: center;
    justify-content: flex-start;
`;
export const NotificationBox = styled.TouchableOpacity`
    height: 100px;
    width: auto;
`;
export const Description = styled.Text`
    font-size: 15px;
    font-weight: 500;
    padding: 15px;
    margin-left: 10px;
    color: #fff;
`;
export const TimeStamp = styled.Text`
    margin-left: 25px;
    color: rgba(255, 255, 255, 0.8);
`;