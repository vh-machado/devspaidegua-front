import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Texto from "../../../components/Texto";
import BotaoOfertas from "./BotaoOfertas";
import BotaoAnimado from "../../../components/BotaoAnimado";

export default function CardDestaque({
  item: { key, titulo, fundo, coresGradiente },
}) {
  // Função OnPress dos cards que redireciona para o filtro
  const onPressDestaque = () => {
    alert(`Destaque pressionado: ${titulo}`);
  };

  return (
    <BotaoAnimado onPress={() => onPressDestaque()}>
      <ImageBackground source={fundo} style={estilos.card}>
        <LinearGradient
          style={estilos.gradiente}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={coresGradiente}
          //locations={[0.001, 0.2, 0.25, 0.6]}
          locations={[0.01, 0.2, 0.4, 0.65]}
        >
          <Texto style={estilos.titulo}>{titulo}</Texto>
          <BotaoOfertas />
        </LinearGradient>
      </ImageBackground>
    </BotaoAnimado>
  );
}

const estilos = StyleSheet.create({
  card: {
    height: 120,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 5,
    marginHorizontal: 24,
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

  gradiente: {
    flex: 1,
    flexDirection: "row",
  },

  titulo: {
    flex: 1,
    fontSize: 24,
    color: "white",
    fontWeight: "600",
    textAlignVertical: "center",
    marginStart: 45,
    alignSelf: 'center',
  },
});
