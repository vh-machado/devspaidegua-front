import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import cores from "../../assets/cores";
import Texto from "../../components/Texto";
import useUser from "../../hooks/useUser";
import BotaoSacola from "./components/BotaoSacola";
import TopoPerfilCliente from "./components/TopoPerfilCliente";

function MenuPerfil() {
  const aoPressionarFavoritos = () => {
    console.log("mostrar favoritos");
  };

  const aoPressionarConfiguracoes = () => {
    console.log("mostrar configurações");
  };

  return (
    <>
      <Pressable
        onPress={aoPressionarFavoritos}
        android_ripple={{ color: cores.gainsboro }}
      >
        <View style={estilos.botaoMenu}>
          <View style={estilos.viewRow}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color={cores.blueSapphire}
            />
            <Texto style={estilos.tituloMenu}>Favoritos</Texto>
          </View>
          <Octicons
            name="chevron-right"
            size={30}
            color={cores.battleshipGrey}
          />
        </View>
      </Pressable>

      <Pressable
        onPress={aoPressionarConfiguracoes}
        android_ripple={{ color: cores.gainsboro }}
      >
        <View style={estilos.botaoMenu}>
          <View style={estilos.viewRow}>
            <Feather name="settings" size={24} color={cores.blueSapphire} />
            <Texto style={estilos.tituloMenu}>Configurações</Texto>
          </View>
          <Octicons
            name="chevron-right"
            size={30}
            color={cores.battleshipGrey}
          />
        </View>
      </Pressable>
    </>
  );
}

export default function PerfilCliente({ sacola }) {
  const { nome, imagem } = useUser();

  return (
    <>
      <TopoPerfilCliente nome={nome} imagem={imagem} />
      <View>
        <BotaoSacola sacola={sacola} />

        <MenuPerfil />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  botaoMenu: {
    flexDirection: "row",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 24,
    borderBottomColor: cores.gainsboro,
    borderBottomWidth: 1,
  },

  viewRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  tituloMenu: {
    fontSize: 14,
    fontWeight: "600",
    color: cores.blueSapphire,
    marginStart: 20,
  },
});
