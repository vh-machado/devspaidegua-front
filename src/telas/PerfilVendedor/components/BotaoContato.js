import React from "react";
import { StyleSheet } from "react-native";
import * as Linking from "expo-linking";
import { FontAwesome5 } from "@expo/vector-icons";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";
import BotaoAnimado from "../../../components/BotaoAnimado";
import usePerfilVendedor from "../../../hooks/usePerfilVendedor";

export default function BotaoContato({ tipo = "whatsapp" }) {
  const { numeroWhatsapp, contaInstagram } = usePerfilVendedor();

  let estilos = estilosFuncao(tipo);

  const onPressContato = () => {
    Linking.openURL(
      tipo === "whatsapp"
        ? `https://wa.me/${numeroWhatsapp}?text=Olá,%20vim%20do%20app%20Veropa`
        : `instagram://user?username=${contaInstagram}`
    );
  };

  return (
    <BotaoAnimado onPress={onPressContato} estilo={estilos.botao}>
      {tipo === "whatsapp" ? (
        <FontAwesome5 name="whatsapp" size={24} color="white" />
      ) : (
        <FontAwesome5 name="instagram" size={24} color="white" />
      )}
      <Texto style={estilos.titulo}>
        {tipo === "whatsapp" ? "WhatsApp" : "Instagram"}
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
        tipo === "whatsapp" ? cores.persianGreen : cores.darkOrchid,
      marginHorizontal: 12,
      padding: 15,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: tipo === "whatsapp" ? cores.persianGreen : cores.darkOrchid,
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
