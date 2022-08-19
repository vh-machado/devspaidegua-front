import React from "react";
import { ImageBackground, StyleSheet, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import cores from "../assets/cores";
import topo from "../assets/topo.png";
import Texto from "./Texto";
import useInicio from "../hooks/useInicio";

const width = Dimensions.get("screen").width;

export default function TopoPesquisa() {
  const { textoBarraPesquisa } = useInicio();
  console.log(textoBarraPesquisa)

  return (
    <ImageBackground source={topo} style={estilos.topo}>
      <View style={estilos.barraPesquisa}>
        <Ionicons name="search" size={20} color={cores.spanishGray} />
        <Texto style={estilos.texto}>{textoBarraPesquisa}</Texto>
      </View>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (120 / 360) * width,
    //justifyntenCot: "flex-end",
    //alignItems: "flex-end",
    justifyContent: "flex-end",
    overflow: "hidden",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    shadowColor: "black",
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

  barraPesquisa: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 25,
    borderColor: cores.platinum,
    borderWidth: 1,
  },

  texto: {
    fontSize: 12,
    color: cores.spanishGray,
    fontWeight: "600",
    marginStart: 10,
  },
});
