import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Texto from "../../../components/Texto";
import Header from "../../../assets/headers/header-card.svg";
import InfoDetalhes from "../../../components/InfoDetalhes";
import BotaoAnimado from "../../../components/BotaoAnimado";
import MapaIcone from "../../../assets/icons/location.svg";

const width = Dimensions.get("screen").width;

export default function CardLocalizacao({ id, nome, imagem }) {
  //const navigation = useNavigation();

  const aoPressionarLocalizacao = () => {
    console.log("Navegar para localização");
  };

  return (
    <BotaoAnimado
      estilo={estilos.card}
      escalaMinima={0.95}
      onPress={aoPressionarLocalizacao}
    >
      <View style={estilos.header}>
        <Header width={width - 48} style={{ position: "absolute" }} />

        <View style={estilos.headerInfo}>
          <MapaIcone
            width={"24"}
            height={"24"}
            color={"white"}
          />
          <Texto style={estilos.nome}>{nome}</Texto>
        </View>
      </View>
      
      <ImageBackground source={imagem} style={estilos.capa}>
        <InfoDetalhes/>
      </ImageBackground>
      
    </BotaoAnimado>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
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
    marginTop: 5,
    marginBottom: 10,
  },

  header: {
    height: (46.1 / 310) * width,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    overflow: "hidden",
  },

  headerInfo: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  nome: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    marginStart: 15,
  },

  imagem: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "white",
    marginEnd: 15,
  },

  capa: {
    width: "100%",
    height: 130,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderTopWidth: 1.3,
    borderColor: "white",
  },
});
