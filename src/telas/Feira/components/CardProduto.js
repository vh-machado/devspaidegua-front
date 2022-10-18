import React from "react";
import { Dimensions, Pressable, StyleSheet, View, Image } from "react-native";

import cores from "../../../assets/cores";
import Texto from "../../../components/Texto";
import formataValor from "../../../servicos/formataValor";

// Cálculo do tamanho do card
const { width } = Dimensions.get("window");
const margemHorizontal = 24;
const espacoEntreCards = 16;
const numeroColunas = 2;
const cardWidth =
  (width - (margemHorizontal * 2 + espacoEntreCards)) / numeroColunas;

export default function CardProduto({
  nome,
  preco,
  imagem,
  aoPressionarProduto,
}) {
  return (
    <Pressable style={estilos.cardProduto} onPress={aoPressionarProduto}>
      <Image style={estilos.fotoProduto} source={imagem} resizeMode="cover" />
      <View style={estilos.infoProduto}>
        <Texto style={estilos.nomeProduto}>{nome}</Texto>
        <Texto style={estilos.precoProduto}>{formataValor(preco)}</Texto>
      </View>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  cardProduto: {
    width: cardWidth,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 8,
    shadowColor: cores.onyx,
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

  fotoProduto: {
    width: "100%",
    height: (1147 / 1500) * 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },

  infoProduto: {
    padding: 12,
  },

  nomeProduto: {
    color: cores.onyx,
    fontSize: 12,
    fontWeight: "600",
  },

  precoProduto: {
    marginTop: 18,
    color: cores.persianGreen,
    fontSize: 12,
    fontWeight: "600",
  },
});
