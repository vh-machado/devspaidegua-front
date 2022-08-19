import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Texto from '../../../components/Texto';
import BotaoAnimado from '../../../components/BotaoAnimado';
import cores from '../../../assets/cores';

import useCadastro from '../../../hooks/useCadastro';

export default function BotaoVoltar({ onPressVoltar }) {
  // Pega os dados do Botão Voltar do mock cadastro
  const {
    botaoVoltar: { titulo, icone },
  } = useCadastro();

  return (
    <BotaoAnimado escalaMinima={0.98} onPress={onPressVoltar}>
      <LinearGradient
        style={estilos.botao}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={[
          'rgba(255,255,255,0.4)',
          'rgba(255,255,255,0.2)',
          'transparent',
        ]}>
        {icone}
        <Texto style={estilos.titulo}>{titulo}</Texto>
      </LinearGradient>
    </BotaoAnimado>
  );
}

const estilos = StyleSheet.create({
  botao: {
    padding: 2,
    width: 75,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    borderRadius: 20,
    marginStart: 24,
    marginVertical: 5,
  },

  titulo: {
    fontSize: 10,
    fontWeight: '600',
    color: cores.blueSapphire,
    opacity: 1,
  },
});
