import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

import Texto from "../../../components/Texto";
import cores from "../../../assets/cores";

export default function TituloLocalizacao({ children, estiloTitulo = "dark" }) {
  const estilos = estilosFuncao(estiloTitulo);

  return (
    <LinearGradient
      style={estilos.titulo}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[
        "rgba(255, 255, 255, 0.68)",
        "rgba(255, 255, 255, 0.5395)",
        "rgba(255,255,255,0.2)",
      ]}
      locations={[0.0001, 0.2, 0.98]}
      //colors={["rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)", "transparent"]}
    >
      <FontAwesome5
        name="map-marker-alt"
        size={20}
        color={estiloTitulo === "light" ? "white" : cores.blueSapphire}
      />
      <Texto style={estilos.tituloTexto}>{children}</Texto>
    </LinearGradient>
  );
}

const estilosFuncao = (estiloTitulo) =>
  StyleSheet.create({
    titulo: {
      height: 43,
      flexDirection: "row",
      margin: 16,
      borderRadius: 10,
      justifyContent: "flex-start",
      alignItems: "center",
      paddingHorizontal: 10,
    },

    tituloTexto: {
      fontSize: 12,
      fontWeight: "600",
      color: estiloTitulo === "light" ? "white" : cores.blueSapphire,
      marginStart: 10,
    },
  });
