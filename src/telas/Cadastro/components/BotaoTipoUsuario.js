import React from 'react';
import { StyleSheet } from 'react-native';

import Texto from '../../../components/Texto';
import BotaoAnimado from '../../../components/BotaoAnimado';
import cores from '../../../assets/cores';

export default function BotaoTipoUsuario({
  titulo,
  botaoSelecionado = null,
  iconeDesativado,
  iconeAtivado,
  onPressTipoUsuario,
}) {

  // Define se o botão está ativado de acordo com o estado atual
  let botaoUsuarioAtivado = false;
  if (botaoSelecionado === titulo) {
    botaoUsuarioAtivado = true;
  }

  // Os estilos e ícones dependem se o botão está ativado
  let estilos = estilosFuncao(botaoUsuarioAtivado);
  let icone = iconeDesativado;
  if (botaoUsuarioAtivado) {
    icone = iconeAtivado;
  }

  return (
    <BotaoAnimado
      escalaMinima={0.96}
      estilo={estilos.botao}
      onPress={() => onPressTipoUsuario(titulo)}>
      {icone}
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </BotaoAnimado>
  );
}

const estilosFuncao = (botaoUsuarioAtivado) =>
  StyleSheet.create({
    botao: {
      width: '48%',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      padding: 15,
      borderWidth: 2,
      borderRadius: 15,
      borderColor: botaoUsuarioAtivado ? cores.celadonBlue : cores.spanishGray,
      backgroundColor: botaoUsuarioAtivado ? cores.azureX11 : 'white',
      shadowColor: botaoUsuarioAtivado ? cores.blueSapphire : 'black',
      // iOS
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      // Android
      elevation: 3,
    },

    titulo: {
      fontSize: 14,
      fontWeight: '500',
      color: botaoUsuarioAtivado ? cores.celadonBlue : cores.spanishGray,
      marginTop: 5,
    },
  });
