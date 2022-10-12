import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";
import BotaoAnimado from "../../../components/BotaoAnimado";
import usePerfil from "../../../hooks/usePerfil";

export default function BotaoEditar({ tipo = "editar-catalogo" }) {
  const { botaoEditarPerfil, botaoEditarCatalogo } = usePerfil();

  let estilos = estilosFuncao(tipo);

  const onPressEditar = () => {
    if (tipo === "editar-perfil") {
      console.log("navegar para edição de perfil");
    } else {
      console.log("navegar para edição de catálogo");
    }
  };

  return (
    <BotaoAnimado onPress={onPressEditar} estilo={estilos.botao}>
      {tipo === "editar-perfil" ? (
        <MaterialCommunityIcons name="account-edit" size={24} color="white" />
      ) : (
        <MaterialIcons name="add-business" size={24} color="white" />
      )}
      <Texto style={estilos.titulo}>
        {tipo === "editar-perfil" ? botaoEditarPerfil : botaoEditarCatalogo}
      </Texto>
    </BotaoAnimado>
  );
}

const estilosFuncao = (tipo) =>
  StyleSheet.create({
    botao: {
      flex: 1,
      flexDirection: "row",
      backgroundColor:
        tipo === "editar-perfil" ? cores.celadonBlue : cores.persianGreen,
      marginHorizontal: 12,
      padding: 15,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      shadowColor:
        tipo === "editar-perfil" ? cores.celadonBlue : cores.persianGreen,
      //iOS
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      //Android
      elevation: 5,
    },

    titulo: {
      flex: 1,
      textAlign: "center",
      fontSize: 10,
      fontWeight: "500",
      color: "white",
    },
  });
