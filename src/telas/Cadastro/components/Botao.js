import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Texto from '../../../components/Texto';
import BotaoAnimado from '../../../components/BotaoAnimado';
import cores from '../../../assets/cores';

export default function Botao({ titulo, tipo, onPressBotao }) {
  let coresGradiente = [
    'rgba(255,255,255,0.4)',
    'rgba(255,255,255,0.2)',
    'transparent',
  ];

  if (tipo === 'cadastro') {
    coresGradiente = [
      cores.persianGreen,
      cores.metallicSeaweed,
      cores.blueSapphire,
    ];
  }

  return (
    <BotaoAnimado onPress={() => onPressBotao(tipo)}>
      <LinearGradient
        style={estilos.botao}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={coresGradiente}>
        <Texto style={estilos.titulo}>{titulo}</Texto>
      </LinearGradient>
    </BotaoAnimado>
  );
}

const estilos = StyleSheet.create({
  botao: {
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cores.spanishGray,
    marginVertical: 20,
    marginHorizontal: 12,
    shadowColor: 'black',
    //iOS
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    //Android
    elevation: 3,
  },

  titulo: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
});
