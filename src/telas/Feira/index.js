import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { FlatList, StyleSheet, View, Dimensions } from "react-native";

import cores from "../../assets/cores";
import Texto from "../../components/Texto";
import TopoPesquisa from "../../components/TopoPesquisa";
import useFeira from "../../hooks/useFeira";
import CardCategoria from "./components/CardCategoria";
import CardProduto from "./components/CardProduto";
import ChipFiltro from "./components/ChipFiltro";
import ModalFiltros from "./components/ModalFiltros";


export default function Feira({sacola}) {
  const [categoriaEscolhida, setCategoriaEscolhida] = useState(null);
  const [filtrosEscolhidos, setFiltrosEscolhidos] = useState([]);
  const [modalFiltrosVisivel, alterarVisibilidadeModal] = useReducer(
    (modalFiltrosVisivel) => !modalFiltrosVisivel,
    false
  );

  const navigation = useNavigation();
  const {
    textoBarraPesquisa,
    tituloCategorias,
    tituloEncontrados,
    categorias,
    tituloFiltros,
    produtos,
  } = useFeira();

  let produtosPorCategoria = produtos;

  // Filtra  os produtos pela categoriaEscolhida
  if (categoriaEscolhida !== null) {
    produtosPorCategoria = produtos?.filter(
      (produto) => produto.categoria === categoriaEscolhida
    );
  }

  let produtosFiltrados = produtosPorCategoria;

  // Filtra  os produtos pelo conjunto de filtros escolhidos
  if (filtrosEscolhidos.length > 0) {
    produtosFiltrados = [];

    filtrosEscolhidos.forEach( filtro => {
      produtosFiltrados = produtosFiltrados.concat(
        produtosPorCategoria.filter(
          (produto) => produto.filtro === filtro.titulo
        )
      )

    });
  }

  /** Referência do flatlist de categorias */
  let flatListCategoriasRef = useRef(null);

  /** Mostra o card da categoria escolhida a cada render */
  const scrollToIndex = (indiceCategoria) => {
    const timer = setTimeout(() => {
      flatListCategoriasRef.current.scrollToIndex({
        animated: true,
        index: indiceCategoria,
      });
    }, 100);

    return () => clearTimeout(timer);
  };

  /** Controla a escolha de categorias */
  const alteraCategoria = (idCategoria) => {
    // Se a categoria já foi escolhida, ela é desativada
    if (idCategoria === categoriaEscolhida) {
      setCategoriaEscolhida(null);
      return;
    }

    setCategoriaEscolhida(idCategoria);
    setFiltrosEscolhidos([]);
  };

  /** Remove o chip do filtro aos filtros selecionados */
  const removeChip = (titulo) => {
    setFiltrosEscolhidos(
      filtrosEscolhidos.filter((filtro) => filtro.titulo !== titulo)
    );
  };

  useEffect(() => {
    scrollToIndex(categoriaEscolhida === null ? 0 : categoriaEscolhida);
  }, [categoriaEscolhida]);

  const Categorias = () => {
    return (
      <View style={{marginTop: 15}}>
        <Texto style={estilos.titulo}>{tituloCategorias}</Texto>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={estilos.flatlistCategorias}
          style={{ flex: 1 }}
          ref={flatListCategoriasRef}
          data={categorias}
          renderItem={({ item }) => (
            <CardCategoria
              {...item}
              escolhida={categoriaEscolhida === item.id}
              aoPressionarCategoria={() => alteraCategoria(item.id)}
            />
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    );
  };

  const Filtros = () => {
    return (
      <>
        <Texto style={estilos.titulo}>{tituloFiltros}</Texto>
        <View style={estilos.filtros}>
          {filtrosEscolhidos?.map((filtro) => {
            return (
              <ChipFiltro
                {...filtro}
                key={filtro.titulo}
                isSelected={true}
                aoPressionarChip={() => null}
                aoExcluirChip={() => removeChip(filtro.titulo)}
              />
            );
          })}

          <ChipFiltro
            titulo={"Filtros"}
            cor={cores.persianGreen}
            aoPressionarAddFiltros={alterarVisibilidadeModal}
          />
        </View>
      </>
    );
  };

  return (
    <>

      <FlatList
        style={{ flex: 1, marginTop: 120 }}
        contentContainerStyle={{ paddingBottom: 60 }}
        columnWrapperStyle={estilos.flatlistProdutos}
        data={produtosFiltrados}
        renderItem={({ item }) => (
          <CardProduto
            {...item}
            aoPressionarProduto={() => {
              navigation.navigate("Produto", {item, sacola});
            }}
          />
        )}
        keyExtractor={({ id }) => id}
        numColumns={2}
        ListHeaderComponent={() => {
          return (
            <>
              <Categorias />
              <Filtros />
              <Texto style={estilos.titulo}>{tituloEncontrados}</Texto>
            </>
          );
        }}
      />

      <TopoPesquisa textoBarraPesquisa={textoBarraPesquisa} sacola={sacola} />

      <ModalFiltros
        categoriaEscolhida={categoriaEscolhida}
        visivel={modalFiltrosVisivel}
        alterarVisibilidade={alterarVisibilidadeModal}
        filtrosEscolhidos={filtrosEscolhidos}
        setFiltrosEscolhidos={setFiltrosEscolhidos}
        removeChip={removeChip}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  flatlistCategorias: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },

  titulo: {
    marginHorizontal: 24,
    fontSize: 14,
    fontWeight: "600",
    color: cores.onyx,
    marginVertical: 10,
  },

  filtros: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 24,
    paddingTop: 5,
  },

  botaoAddFiltro: {
    width: 30,
    height: 30,
    backgroundColor: cores.metallicSeaweed,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  flatlistProdutos: {
    paddingHorizontal: 16,
  },

  modal: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },

  filtrosModal: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },

  tituloModal: {
    color: cores.onyx,
    fontSize: 14,
    fontWeight: "500",
  },
});
