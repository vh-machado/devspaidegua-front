import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import FundoTopo from "../../../assets/backgrounds/topo.svg";
import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";

const width = Dimensions.get("screen").width;

export default function TopoPerfilCliente({ nome, imagem }) {
    return (
        <View>
            <View style={estilos.topo}>
                <FundoTopo style={{ position: "absolute" }} />

                <View style={estilos.borda}>
                    <Image style={estilos.fotoUsuario} source={imagem} />
                </View>
            </View>
            <Texto style={estilos.nomeUsuario}>{nome}</Texto>
        </View>
    );
}

export const estilos = StyleSheet.create({
    topo: {
      top: 0,
      width: "100%",
      height: (120 / 360) * width,
      justifyContent: "flex-end",
      marginBottom: 50,
    },
  
    borda: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: cores.culturedLight,
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
