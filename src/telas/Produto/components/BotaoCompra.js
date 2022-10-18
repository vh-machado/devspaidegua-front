import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Linking, StyleSheet } from "react-native";

import cores from "../../../assets/cores";
import BotaoAnimado from "../../../components/BotaoAnimado";
import Texto from "../../../components/Texto";
import usePerfil from "../../../hooks/usePerfil";

export default function BotaoCompra({ tipo = "cesta", nomeProduto, aoPressionarSacola }) {
  const { numeroWhatsapp } = usePerfil();

  const onPressContato = () => {
    Linking.openURL(
      `https://wa.me/${numeroWhatsapp}?text=Olá,%20vim%20do%20app%20Veropa,%20gostaria%20de%20comprar%20${nomeProduto}`
    );
  };

  let estilos = estilosFuncao(tipo);

  return (
    <BotaoAnimado
      estilo={estilos.botaoCompra}
      onPress={tipo === "contato" ? onPressContato : aoPressionarSacola}
    >
      {tipo === "contato" ? (
        <FontAwesome5 name="whatsapp" size={24} color="white" />
      ) : (
        <MaterialCommunityIcons
          name="shopping"
          size={24}
          color="white"
        />
      )}
      <Texto style={estilos.tituloBotao}>
        {tipo === "contato" ? "Entrar em contato" : "Adicionar à sacola"}
      </Texto>
    </BotaoAnimado>
  );
}

const estilosFuncao = (tipo) =>
  StyleSheet.create({
    botaoCompra: {
      flex: 1,
      flexDirection: "row",
      backgroundColor:
        tipo === "contato" ? cores.persianGreen : cores.celadonBlue,
      marginHorizontal: 12,
      padding: 15,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
    },

    tituloBotao: {
      flex: 1,
      textAlign: "center",
      fontSize: 10,
      fontWeight: "500",
      color: "white",
      marginStart: 5,
    },
  });
