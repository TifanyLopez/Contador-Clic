import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Contador({ numero }) {
  return (
    <View style={styles.contador}>
      <Text style={styles.texto}>{numero}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contador: {
    borderColor: 'white',
    borderWidth: 2,
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  texto: {
    fontSize:100,
    marginBottom:10,
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
});
