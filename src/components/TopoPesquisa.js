import React from "react";
import { ImageBackground, StyleSheet, Dimensions, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import cores from "../assets/cores";
import topo from "../assets/topo.png";
import FundoTopo from "../assets/backgrounds/topo.svg"
import useInicio from "../hooks/useInicio";

const width = Dimensions.get("screen").width;

export default function TopoPesquisa() {
  const { textoBarraPesquisa } = useInicio();

  return (
    <View style={estilos.topo}>
      <FundoTopo style={{position: "absolute"}}/>
        
      <Searchbar
          style={estilos.barraPesquisa}
          inputStyle={estilos.texto}
          placeholderTextColor={cores.battleshipGrey}
          placeholder={textoBarraPesquisa}
          theme={{colors:{primary: cores.celadonBlue}}}
          icon={() => <Ionicons name="search" size={20} color={cores.battleshipGrey} />}
          clearIcon
        />
    </View>
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
    margin: 10,
    borderRadius: 25,
    borderColor: cores.platinum,
    borderWidth: 1,
  },

  texto: {
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    color: cores.battleshipGrey,
    textAlignVertical: 'center',
    marginStart: -10,
  },
});
