import React from "react";

import { StyleSheet } from 'react-native';

import { Container, Card, CardLabel } from "./styles";

import { Ionicons } from '@expo/vector-icons';

const transactions = [
    {
        key: String(Math.random()),
        icon: 'person-circle-outline',
        label: 'Pagar pessoas',        
    },
    {
        key: String(Math.random()),
        icon: 'barcode-outline',
        label: 'Pagar boleto',        
    },
    {
        key: String(Math.random()),
        icon: 'basket-sharp',
        label: 'Pagar compras',        
    },
    {
        key: String(Math.random()),
        icon: 'ios-logo-bitcoin',
        label: 'Bitcoin',        
    },
    {
        key: String(Math.random()),
        icon: 'person-circle-outline',
        label: 'Fazer cobrança',        
    },
]

export default function Transactions() {
  return (
      <Container>
        {transactions.map(transaction => (
          <Card key={transaction.key} style={shadow.card} >
            <Ionicons name={transaction.icon} size={30} color='#D5F5DE'/>
          <CardLabel>{transaction.label}</CardLabel>
        </Card>
        ))}              
    </Container>
  );
}

const shadow = StyleSheet.create({
    card: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 50, //IOS
        backgroundColor: '#1b1b1b',
        elevation: 5, // Android     
    },
}) ;