import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Texto from "./Texto";
import cores from "../assets/cores";

import useInicio from "../hooks/useInicio";

export default function InfoDetalhes() {
  const { tituloDetalhes } = useInicio();

  return (
    <View style={estilos.rodape}>
      <View style={estilos.detalhes}>
        <Ionicons
          name="information-circle"
          size={20}
          color={cores.persianGreen}
        />
        <Texto style={estilos.detalhesTexto}>{tituloDetalhes}</Texto>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  rodape: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 16,
  },

  detalhes: {
    flexDirection: "row",
    width: 90,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "flex-end",
    paddingHorizontal: 5,
  },

  detalhesTexto: {
    fontSize: 10,
    fontWeight: "500",
    color: cores.persianGreen,
    marginStart: 5,
  },
});
