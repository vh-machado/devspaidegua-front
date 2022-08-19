import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
  let estilo = estilos.texto;

  if (style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  } else if (style?.fontWeight === '500') {
    estilo = estilos.textoMedium;
  } else if (style?.fontWeight === '600') {
    estilo = estilos.textoSemiBold;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoMedium: {
    fontFamily: 'MontserratMedium',
    fontWeight: 'normal',
  },
  textoSemiBold: {
    fontFamily: 'MontserratSemiBold',
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
});
