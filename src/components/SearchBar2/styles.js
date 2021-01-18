import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
`;

export const InputContainer = styled.View`
    height: 50px;
    width: 310px;

    border-radius: 30px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: #2E2E2E;
`;

export const BoxButtonSearch = styled.View`
    width: 60px;
    height: 60px;    
    align-items: center;
    justify-content: center;    
    left: 20px;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);;
    position: absolute;
    left: 70px;
`;