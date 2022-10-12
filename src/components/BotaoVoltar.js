import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons } from "@expo/vector-icons";

import Texto from "./Texto";
import BotaoAnimado from "./BotaoAnimado";
import cores from "../assets/cores";

import useCadastro from "../hooks/useCadastro";
import { useNavigation } from "@react-navigation/native";

export default function BotaoVoltar({ tipo = "branco" }) {
  const navigation = useNavigation();

  // Pega os dados do Botão Voltar do mock cadastro
  const { botaoVoltar } = useCadastro();

  const onPressVoltar = () => {
    navigation.canGoBack() ? navigation.goBack() : alert("Impossível voltar");
  };

  const FundoGradiente = ({children}) => {
    return (
      <LinearGradient
        style={[estilos.botao, estilos.botaoTransparente]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={[
          "rgba(255,255,255,0.4)",
          "rgba(255,255,255,0.2)",
          "transparent",
        ]}
      >
        {children}
      </LinearGradient>
    );
  }

  const FundoBranco = ({children}) => {
    return (
      <View style={[estilos.botao, estilos.botaoBranco]}>
        {children}
      </View>
    )
  }

  let FundoBotao = tipo === "transparente"? FundoGradiente : FundoBranco;

  return (
    <BotaoAnimado escalaMinima={0.98} onPress={onPressVoltar}>
      <FundoBotao>
        <Octicons name="chevron-left" size={30} color={cores.blueSapphire} />
        <Texto style={estilos.titulo}>{botaoVoltar}</Texto>
      </FundoBotao>
    </BotaoAnimado>
  );
}

const estilos = StyleSheet.create({
  botao: {
    padding: 2,
    width: 75,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    marginStart: 24,
    marginVertical: 5,
  },

  botaoTransparente: {
    backgroundColor: "rgba(200, 200, 200, 0.3)",
  },

  botaoBranco: {
    backgroundColor: 'white'
  },

  titulo: {
    fontSize: 10,
    fontWeight: "600",
    color: cores.blueSapphire,
    opacity: 1,
  },
});
