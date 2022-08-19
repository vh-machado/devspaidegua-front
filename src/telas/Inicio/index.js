import React from "react";
import { FlatList, StyleSheet } from "react-native";

import TopoPesquisa from "../../components/TopoPesquisa";
import useInicio from "../../hooks/useInicio";
import CardDestaque from "./components/CardDestaque";

export default function Inicio() {
  const { destaques: {tituloDestaques, listaDestaques}} = useInicio();
  console.log(listaDestaques)

  return (
    <>
      <TopoPesquisa />

      <FlatList
        style={estilos.flatlist}
        data={listaDestaques}
        renderItem={({ item }) => (
          <CardDestaque
            {...item}
          />
        )}
        keyExtractor={({ key }) => key}
        ListFooterComponent={() => {
          return (
            <>
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  flatlist: {
    paddingHorizontal: 12,
  },
});
