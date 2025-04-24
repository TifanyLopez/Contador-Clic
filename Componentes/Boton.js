
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react'

export default function Boton({ texto, onPress, color }) {
  const fondo = color === 'blue' ? '#FF0000' : '#BC00FF' ;

  return (
    <TouchableOpacity style={[styles.boton, { backgroundColor: fondo }]} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    bordecolor:'white',
    borderWidth:1,
    height:50,
    width: 200,
    paddingVertical: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  

});