import React from "react";
import { ImageBackground, StyleSheet, Image, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";
import BotaoVoltar from "../../../components/BotaoVoltar";
import useUser from "../../../hooks/useUser";

export default function TopoPerfilVendedor() {
  const route = useRoute();
  const { nome, imagem, capa } = route.params
    ? route.params
    : useUser();

  return (
    <>
      <ImageBackground resizeMode="cover" style={estilos.topo} source={capa}>
        <BotaoVoltar tipo={"branco"} />
        <View style={estilos.borda}>
          <Image style={estilos.fotoUsuario} source={imagem} />
        </View>
      </ImageBackground>
      <Texto style={estilos.nomeUsuario}>{nome}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    height: 200,
    paddingTop: 30,
    marginBottom: 50,
  },

  borda: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: cores.cultured,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: -50,
  },

  fotoUsuario: {
    width: 92,
    height: 92,
    borderRadius: 50,
    borderColor: cores.cultured,
  },

  nomeUsuario: {
    fontSize: 18,
    color: cores.onyx,
    fontWeight: "600",
    alignSelf: "center",
    marginVertical: 10,
  },
});
