import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";
import useFeira from "../../../hooks/useFeira";
import ChipFiltro from "./ChipFiltro";
import BotaoAnimado from "../../../components/BotaoAnimado";

export default function ModalFiltros({
  visivel,
  alterarVisibilidade,
  filtragem,
  setFiltragem,
  removeChip,
  atualizaProdutosPesquisados,
}) {
  const { categorias } = useFeira();

  /** Adiciona o chip do filtro aos filtros selecionados */
  const adicionaChip = (filtro) => {
    let filtrosAtualizados = filtragem?.filtros.concat(filtro);
    setFiltragem({ ...filtragem, filtros: filtrosAtualizados });
  };

  const salvarFiltros = () => {
    const { pesquisa, categoria, filtros } = filtragem;
    atualizaProdutosPesquisados(pesquisa, categoria, filtros);
    alterarVisibilidade();
  };

  /** Verifica se o chip de filtro foi selecionado no modal */
  const verificaFiltroSelecionado = (titulo) => {
    return (
      filtragem?.filtros?.find((filtro) => filtro.titulo === titulo) !==
      undefined
    );
  };

  // Separa os filtros da categoria escolhida
  let filtrosCategoria = categorias?.find(
    (categoria) => categoria.id === filtragem?.categoria
  )?.filtros;

  // Caso nenhuma categoria foi selecionada, todos os
  // filtros serão mostrados
  if (filtrosCategoria === undefined) {
    filtrosCategoria = [];
    categorias?.forEach((categoria) => {
      filtrosCategoria = filtrosCategoria.concat(categoria.filtros);
    });
  }

  return (
    <Modal
      isVisible={visivel}
      onRequestClose={salvarFiltros}
      onBackdropPress={salvarFiltros}
      onBackButtonPress={salvarFiltros}
      animationIn={"pulse"}
      animationOut={"fadeOutDown"}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={800}
      useNativeDriver={true}
    >
      <View style={estilos.modal}>
        <Texto style={estilos.tituloModal}>Escolha os filtros</Texto>

        <ScrollView contentContainerStyle={estilos.filtrosModal}>
          {filtrosCategoria?.map((filtro) => {
            return (
              <ChipFiltro
                key={filtro.titulo}
                {...filtro}
                isSelected={verificaFiltroSelecionado(filtro.titulo)}
                aoPressionarChip={() =>
                  verificaFiltroSelecionado(filtro.titulo)
                    ? removeChip(filtro.titulo)
                    : adicionaChip(filtro)
                }
                hideCloseIcon={true}
              />
            );
          })}
        </ScrollView>

        <BotaoAnimado
          escalaMinima={0.95}
          estilo={estilos.botao}
          onPress={salvarFiltros}
        >
          <Texto style={estilos.tituloBotao}>Pronto</Texto>
        </BotaoAnimado>
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

  filtrosModal: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },

  tituloModal: {
    color: cores.onyx,
    fontSize: 14,
    fontWeight: "500",
  },

  botao: {
    width: "40%",
    padding: 10,
    alignSelf: "flex-end",
    marginTop: 20,
    backgroundColor: cores.persianGreen,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  tituloBotao: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
