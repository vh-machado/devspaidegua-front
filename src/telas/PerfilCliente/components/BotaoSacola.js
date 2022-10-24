import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

import cores from "../../../assets/cores";
import BotaoAnimado from "../../../components/BotaoAnimado";
import Texto from "../../../components/Texto";
import formataValor from "../../../servicos/formataValor";
import { useNavigation } from "@react-navigation/native";

export default function BotaoSacola({ sacola }) {
  const [preco, setPreco] = useState(calculaPrecoTotal());
  const navigation = useNavigation();

  const aoPressionar = () => {
    navigation.navigate("Sacola", sacola);
  };

  useEffect(() => {
    const atualizaPreco = navigation.addListener("focus", () => {
      setPreco(calculaPrecoTotal());
    });

    return atualizaPreco;
  }, [navigation]);

  /** Calcula o valor total do pedido */
  function calculaPrecoTotal() {
    let total = 0;
    sacola.produtos.forEach((item) => {
      total += item.quantidade * item.preco;
    });
    return total;
  }

  return (
    <BotaoAnimado estilo={estilos.botao} onPress={aoPressionar}>
      <View style={estilos.container}>
        <MaterialCommunityIcons name="shopping" size={24} color="white" />
        <Texto style={estilos.titulo}>Sacola</Texto>
      </View>

      <View style={estilos.container}>
        <Texto style={estilos.preco}>{formataValor(preco)}</Texto>
        <Octicons name="chevron-right" size={30} color={"white"} />
      </View>
    </BotaoAnimado>
  );
}

const estilos = StyleSheet.create({
  botao: {
    flexDirection: "row",
    backgroundColor: cores.persianGreen,
    borderRadius: 10,
    marginHorizontal: 24,
    marginTop: 30,
    padding: 20,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "space-between",
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

  titulo: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginStart: 20,
  },

  preco: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginEnd: 20,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
