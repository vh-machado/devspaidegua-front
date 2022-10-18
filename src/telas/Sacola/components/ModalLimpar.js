import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

import cores from "../../../assets/cores";
import BotaoAnimado from "../../../components/BotaoAnimado";
import Texto from "../../../components/Texto";

export default function ModalLimpar({
  visivel,
  alterarVisibilidade,
  limparSacola,
}) {
  return (
    <Modal
      isVisible={visivel}
      onRequestClose={alterarVisibilidade}
      onBackdropPress={alterarVisibilidade}
      onBackButtonPress={alterarVisibilidade}
      animationIn={"pulse"}
      animationOut={"fadeOutDown"}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={800}
      useNativeDriver={true}
    >
      <View style={estilos.modal}>
        <Texto style={estilos.tituloModal}>Limpar sacola?</Texto>
        <Texto style={estilos.textoModal}>Todos os itens serão removidos</Texto>

        <View style={{ flexDirection: "row" }}>
          <BotaoAnimado
            estilo={estilos.botaoCancelar}
            onPress={() => {
              alterarVisibilidade();
            }}
          >
            <Texto style={estilos.tituloBotaoLimpar}>Cancelar</Texto>
          </BotaoAnimado>

          <BotaoAnimado
            estilo={estilos.botaoLimpar}
            onPress={() => {
              limparSacola();
              alterarVisibilidade();
            }}
          >
            <Texto style={estilos.tituloBotaoLimpar}>Limpar</Texto>
          </BotaoAnimado>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },

  tituloModal: {
    color: cores.onyx,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },

  textoModal: {
    color: cores.onyx,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 30,
  },

  botaoLimpar: {
    flex: 1,
    padding: 15,
    backgroundColor: cores.bittersweet,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 5,
  },

  botaoCancelar: {
    flex: 1,
    padding: 15,
    backgroundColor: cores.spanishGray,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 5,
  },

  tituloBotaoLimpar: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
