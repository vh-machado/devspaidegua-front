import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import cores from "../../assets/cores";
import Texto from "../../components/Texto";

import TopoPesquisa from "../../components/TopoPesquisa";
import useInicio from "../../hooks/useInicio";
import CardDestaque from "./components/CardDestaque";
import CardPontoTuristico from "./components/CardPontoTuristico";

export default function Inicio() {
  const {
    tituloDestaques,
    listaDestaques,
    tituloPontosTuristicos,
    listaPontosTuristicos,
  } = useInicio();

  // Componente dos Pontos Turísticos
  const CarrosselPontosTuristicos = () => {
    return (
      <FlatList
        contentContainerStyle={estilos.carrossel}
        data={listaPontosTuristicos}
        horizontal={true}
        renderItem={(item) => <CardPontoTuristico {...item} />}
        keyExtractor={({ key }) => key}
      />
    );
  };

  return (
    <>
      <View style={{ backgroundColor: cores.cultured }}>
        <TopoPesquisa />
      </View>

      <FlatList
        style={estilos.flatlist}
        data={listaDestaques}
        horizontal={false}
        renderItem={(item) => <CardDestaque {...item} />}
        keyExtractor={({ key }) => key}
        ListHeaderComponent={() => {
          return <Texto style={estilos.tituloSecao}>{tituloDestaques}</Texto>;
        }}
        ListFooterComponent={() => {
          return (
            <>
              <Texto style={estilos.tituloSecao}>
                {tituloPontosTuristicos}
              </Texto>

              <CarrosselPontosTuristicos />
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  flatlist: {
    backgroundColor: cores.cultured,
  },

  tituloSecao: {
    fontSize: 16,
    fontWeight: "600",
    color: cores.onyx,
    marginBottom: 10,
    marginTop: 20,
    marginHorizontal: 24,
  },

  carrossel: {
    paddingHorizontal: 16,
    marginVertical: 10,
    paddingBottom: 50,
  },
});
