import React from "react";
import { Pressable, StyleSheet } from "react-native";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";

export default function CardCategoria({ titulo, Icone, escolhida, aoPressionarCategoria }) {

  let estilos = estilosFuncao(escolhida);

  return (
    <Pressable style={estilos.card} onPress={aoPressionarCategoria}>
      <Icone color={(escolhida)? "white" : cores.spanishGray}/>
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </Pressable>
  );
}

const estilosFuncao = (escolhida) => StyleSheet.create({
  card: {
    width: 72,
    height: 80,
    backgroundColor: (escolhida)? cores.celadonBlue : "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 8,
    shadowColor: "black",
    //iOS
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    //Android
    elevation: 1,
  },
  titulo: {
    color: (escolhida)? "white" : cores.spanishGray,
    marginTop: 5,
    fontSize: 10,
    fontWeight: "600",
  },
});
