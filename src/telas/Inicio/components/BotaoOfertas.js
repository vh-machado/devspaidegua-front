import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";
import useInicio from "../../../hooks/useInicio";

export default function BotaoOfertas() {
  const { botaoOfertas } = useInicio();

  return (
    <View style={estilos.botao}>
      <MaterialCommunityIcons name="shopping" size={20} color="white" />
      <Texto style={estilos.texto}>{botaoOfertas}</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  botao: {
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: cores.persianGreen,
    borderBottomStartRadius: 25,
    borderTopStartRadius: 25,
    alignSelf: "flex-end",
    marginBottom: 18,
    paddingHorizontal: 15,
    marginEnd: -0.5,
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

  texto: {
    fontSize: 10,
    fontWeight: "500",
    color: "white",
    marginStart: 10,
  },
});
