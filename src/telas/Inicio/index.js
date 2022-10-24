import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import cores from "../../assets/cores";
import Texto from "../../components/Texto";

import TopoPesquisa from "../../components/TopoPesquisa";
import useInicio from "../../hooks/useInicio";
import CardDestaque from "./components/CardDestaque";
import CardPontoTuristico from "./components/CardPontoTuristico";

export default function Inicio({ sacola, pesquisaInicio, setPesquisaInicio }) {
  const navigation = useNavigation();

  const {
    textoBarraPesquisa,
    tituloDestaques,
    listaDestaques,
    tituloPontosTuristicos,
    listaPontosTuristicos,
  } = useInicio();

  const aoPressionarDestaque = (destaque) => {
    let categoriaDestaque;
    let filtrosDestaque;

    if (destaque === "Açaí") {
      categoriaDestaque = 4;
      filtrosDestaque = [{ cor: "#B482D6", titulo: "Açaí" }];
    } else if (destaque === "Peixes") {
      categoriaDestaque = 3;
      filtrosDestaque = [];
    } else if (destaque === "Frutas") {
      categoriaDestaque = 1;
      filtrosDestaque = [];
    }

    setPesquisaInicio({
      ...pesquisaInicio,
      categoria: categoriaDestaque,
      filtros: filtrosDestaque,
    });
    navigation.navigate("Feira", {
      screen: "ProdutoOrigem",
    });
  };

  const aoPesquisar = (textoPesquisa) => {
    setPesquisaInicio({ ...pesquisaInicio, pesquisa: textoPesquisa });
    navigation.navigate("Feira", {
      screen: "ProdutoOrigem",
    });
  };

  // Componente dos Pontos Turísticos
  const CarrosselPontosTuristicos = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
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
      <FlatList
        style={estilos.flatlist}
        data={listaDestaques}
        horizontal={false}
        renderItem={(item) => (
          <CardDestaque {...item} aoPressionarDestaque={aoPressionarDestaque} />
        )}
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

      <TopoPesquisa
        inicio={true}
        textoBarraPesquisa={textoBarraPesquisa}
        sacola={sacola}
        pesquisaInicio={pesquisaInicio}
        aoPesquisar={(textoPesquisa) => aoPesquisar(textoPesquisa)}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  flatlist: {
    backgroundColor: cores.cultured,
    marginTop: 120,
  },

  tituloSecao: {
    fontSize: 16,
    fontWeight: "600",
    color: cores.onyx,
    marginBottom: 10,
    marginTop: 25,
    marginHorizontal: 24,
  },

  carrossel: {
    paddingHorizontal: 16,
    marginVertical: 10,
    paddingBottom: 50,
  },
});
