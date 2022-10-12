import React from "react";
import { Chip } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import cores from "../../../assets/cores";
import { StyleSheet } from "react-native";

export default function ChipFiltro({
  titulo,
  cor,
  isSelected,
  aoPressionarAddFiltros,
  aoPressionarChip,
  aoExcluirChip,
  hideCloseIcon = false,
}) {
  let estilos = estilosFuncao(titulo, cor, hideCloseIcon, isSelected);

  return (
    <Chip
      icon={
        titulo === "Filtros" ? (
          () => <Octicons name="plus" size={18} color={"white"} />
        ) : (
          <></>
        )
      }
      style={estilos.chip}
      textStyle={estilos.texto}
      selected={isSelected}
      onClose={titulo !== "Filtros" && !hideCloseIcon ? aoExcluirChip : null}
      closeIcon={() => (
        <Ionicons name="md-close" size={18} color={cores.onyx} />
      )}
      onPress={titulo === "Filtros" ? aoPressionarAddFiltros : aoPressionarChip}
    >
      {titulo}
    </Chip>
  );
}

const estilosFuncao = (titulo, cor, hideCloseIcon, isSelected) =>
  StyleSheet.create({
    chip: {
      marginEnd: 10,
      marginBottom: 10,
      backgroundColor:
        titulo === "Filtros" || isSelected ? cor : cores.gainsboro,
    },

    texto: {
      fontFamily: "MontserratSemiBold",
      fontSize: 10,
      marginEnd: titulo === "Filtros" || hideCloseIcon ? 12 : 2,
      color: titulo === "Filtros"? "white" : cores.onyx,
    },
  });
