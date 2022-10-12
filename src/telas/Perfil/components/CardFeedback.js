import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";
import usePerfil from "../../../hooks/usePerfil";

const avaliado = true;
const favoritado = true;

export default function CardFeedback({ tipo = "clientes" }) {
  const { valorEstrelas, valorClientes, tituloEstrelas, tituloClientes } =
    usePerfil();

  let estilos = estilosFuncao(tipo);

  // onPress dos ícones de estrela e coração
  const darFeedback = () => {
    console.log("Feature de feedback")
  }

  return (
    <View style={estilos.card}>
      <Pressable onPress={darFeedback}>
        {tipo === "estrelas" ? (
          avaliado ? (
            <FontAwesome name="star" size={30} color={cores.yellowOrange} />
          ) : (
            <FontAwesome name="star-o" size={30} color={cores.yellowOrange} />
          )
        ) : favoritado ? (
          <FontAwesome name="heart" size={30} color={cores.bittersweet} />
        ) : (
          <FontAwesome name="heart-o" size={30} color={cores.bittersweet} />
        )}
      </Pressable>

      <Texto style={estilos.valor}>
        {tipo === "estrelas" ? valorEstrelas : valorClientes}
      </Texto>
      <Texto style={estilos.titulo}>
        {tipo === "estrelas" ? tituloEstrelas : tituloClientes}
      </Texto>
    </View>
  );
}

const estilosFuncao = (tipo) =>
  StyleSheet.create({
    card: {
      flex: 1,
      marginHorizontal: 12,
      padding: 15,
      backgroundColor: cores.culturedLight,
      borderRadius: 10,
      alignItems: "center",
    },

    valor: {
      fontSize: 16,
      fontWeight: "600",
      color: tipo === "estrelas" ? cores.yellowOrange : cores.bittersweet,
      marginTop: 5,
    },

    titulo: {
      fontSize: 10,
      fontWeight: "500",
      color: tipo === "estrelas" ? cores.yellowOrange : cores.bittersweet,
    },
  });
