import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

import Texto from '../../../components/Texto';

import FundoTopoCadastro from "../../../assets/backgrounds/topo-cadastro.svg"

import useCadastro from '../../../hooks/useCadastro';
import BotaoVoltar from '../../../components/BotaoVoltar';

const width = Dimensions.get('screen').width;

export default function Topo () {

  // Pega os dados do topo do mock cadastro
  const { titulo } = useCadastro();

  return (
    <View style={estilos.topo}>
      <FundoTopoCadastro style={{position: "absolute"}}/>
      <BotaoVoltar tipo={"transparente"}/>
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: (326 / 720) * width,
    flexDirection: 'row',
    //paddingTop: (Platform.OS === 'android')? Constants.statusBarHeight : 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 65,
    marginEnd: 24,
  },
});
