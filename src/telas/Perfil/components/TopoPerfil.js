import React from "react";
import { ImageBackground, StyleSheet, Image } from "react-native";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";

import fundoBarraca from "../../../assets/backgrounds/fundo-barraca.jpg";
import fotoUsuario from "../../../assets/foto-usuario.jpeg";
import usePerfil from "../../../hooks/usePerfil";
import BotaoVoltar from "../../../components/BotaoVoltar";

export default function TopoPerfil() {
  const { nomeUsuario } = usePerfil();

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={estilos.topo}
        source={fundoBarraca}
      >
        <BotaoVoltar tipo={"branco"}/>
        <Image style={estilos.fotoUsuario} source={fotoUsuario} />
      </ImageBackground>
      <Texto style={estilos.nomeUsuario}>{nomeUsuario}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    height: 200,
    paddingTop: 30,
    marginBottom: 50,
  },

  fotoUsuario: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: cores.cultured,
    alignSelf: "center",
    position: "absolute",
    bottom: -50,
  },

  nomeUsuario: {
    fontSize: 18,
    color: cores.onyx,
    fontWeight: "600",
    alignSelf: "center",
    marginVertical: 10,
  },
});
