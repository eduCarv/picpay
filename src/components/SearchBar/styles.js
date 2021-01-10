import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
    width: ${width + 0.7}px;
    height: 60px;
    background-color: #1e222b;
`;

export const InputContainer = styled.View`
    height: 50px;
    width: 350px;
    align-self: center;    
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    margin-top: 10px;    

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BoxButtonSearch = styled.View`
    width: 60px;
    height: 60px;    
    align-items: center;
    justify-content: center;    
`;

export const Text = styled.Text`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);;
    position: absolute;
    left: 50px;
`;