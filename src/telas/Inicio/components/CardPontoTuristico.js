import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import BotaoAnimado from "../../../components/BotaoAnimado";
import InfoDetalhes from "../../../components/InfoDetalhes";

import TituloLocalizacao from "./TituloLocalizacao";

export default function CardPontoTuristico({
  item: { key, titulo, imagem, estiloTitulo },
}) {
  // Função onPress dos card que redireciona pra descrição do ponto turístico
  const onPressPontoTuristico = () => {
    console.log(`Ponto turístico pressionado: ${titulo}`);
  };

  return (
    <BotaoAnimado onPress={() => onPressPontoTuristico()}>
      <ImageBackground source={imagem} style={estilos.card}>
        <TituloLocalizacao estiloTitulo={estiloTitulo}>
          {titulo}
        </TituloLocalizacao>
        <InfoDetalhes />
      </ImageBackground>
    </BotaoAnimado>
  );
}

const estilos = StyleSheet.create({
  card: {
    flexDirection: "column",
    width: 252,
    height: 336,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 20,
    overflow: "hidden",
    marginStart: 8,
    marginBottom: 14,
    marginEnd: 8,
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
});
