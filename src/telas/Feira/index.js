import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
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

export default function Feira({ sacola, pesquisaInicio, setPesquisaInicio }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [filtragem, setFiltragem] = useState({ ...pesquisaInicio });
  const [modalFiltrosVisivel, alterarVisibilidadeModal] = useReducer(
    (modalFiltrosVisivel) => !modalFiltrosVisivel,
    false
  );

  const {
    textoBarraPesquisa,
    tituloCategorias,
    tituloEncontrados,
    categorias,
    tituloFiltros,
    produtos,
  } = useFeira();

  const [produtosPesquisados, setProdutosPesquisados] = useState([]);

  useEffect(() => {
    setProdutosPesquisados(produtos);
    setFiltragem({ ...pesquisaInicio });
    const { pesquisa, categoria, filtros } = pesquisaInicio;
    atualizaProdutosPesquisados(pesquisa, categoria, filtros);
  }, [produtos]);

  const atualizaProdutosPesquisados = (textoPesquisa, idCategoria, filtros) => {
    // Filtragem pela pesquisa
    let produtosFiltrados = produtos?.filter(function (produto) {
      const nomeProduto = produto.nome ? produto.nome.toLowerCase() : "";
      const texto = textoPesquisa?.toLowerCase();
      return nomeProduto.indexOf(texto) > -1;
    });

    // Filtragem por categoria
    if (idCategoria != null) {
      produtosFiltrados = produtosFiltrados?.filter(
        (produto) => produto.categoria == idCategoria
      );
    }

    // Filtragem pelos filtros
    if (filtros.length > 0) {
      let produtosPorFiltro = [];

      filtros.forEach((filtro) => {
        produtosPorFiltro = produtosPorFiltro.concat(
          produtosFiltrados?.filter(
            (produto) => produto.filtro === filtro.titulo
          )
        );
      });
      produtosFiltrados = produtosPorFiltro;
    }

    setProdutosPesquisados(produtosFiltrados);
  };

  /** Filtragem dos produtos de acordo com o que é pesquisado no TopoPesquisa */
  const aoPesquisar = (textoPesquisa) => {
    // Verifica se o campo de pesquisa está vazio
    setPesquisaInicio({pesquisa: textoPesquisa, categoria: null, filtros: []});
    setFiltragem({ pesquisa: textoPesquisa, categoria: null, filtros: [] });

    if (textoPesquisa) {
      atualizaProdutosPesquisados(
        textoPesquisa,
        filtragem.categoria,
        filtragem.filtros
      );
    } else {
      setProdutosPesquisados(produtos);
    }
  };

  /** Referência do flatlist de categorias */
  let flatListCategoriasRef = useRef(null);

  /** Mostra o card da categoria escolhida a cada render */
  const scrollToIndex = (indiceCategoria) => {
    const timer = setTimeout(() => {
      flatListCategoriasRef.current?.scrollToIndex({
        animated: true,
        index: indiceCategoria,
        viewOffset: 16,
      });
    }, 100);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    scrollToIndex(filtragem.categoria ? filtragem.categoria : 0);
  }, [filtragem]);

  const onScrollToIndexFailed = () => {
    const timer = setTimeout(() => {
      flatListCategoriasRef.current?.scrollToIndex({
        animated: true,
        index: 0,
        viewOffset: 16,
      });
    }, 100);

    return () => clearTimeout(timer);
  };

  /** Controla a escolha de categorias */
  const alteraCategoria = (idCategoria) => {
    // Se a categoria já foi escolhida, ela é desativada
    if (idCategoria === filtragem.categoria) {
      setFiltragem({ ...filtragem, categoria: null });
      atualizaProdutosPesquisados(filtragem.pesquisa, null, []);
      return;
    }

    setFiltragem({ ...filtragem, categoria: idCategoria, filtros: [] });
    atualizaProdutosPesquisados(filtragem.pesquisa, idCategoria, []);
  };

  /** Remove o chip do filtro aos filtros selecionados */
  const removeChip = (titulo) => {
    let filtrosAtualizados = filtragem?.filtros.filter(
      (filtro) => filtro.titulo !== titulo
    );

    setFiltragem({ ...filtragem, filtros: filtrosAtualizados });
    atualizaProdutosPesquisados(
      filtragem.pesquisa,
      filtragem.categoria,
      filtrosAtualizados
    );
  };

  const Categorias = () => {
    return (
      <View style={{ marginTop: 15 }}>
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
              escolhida={filtragem.categoria === item.id}
              aoPressionarCategoria={() => alteraCategoria(item.id)}
            />
          )}
          keyExtractor={({ id }) => id}
          onScrollToIndexFailed={onScrollToIndexFailed}
        />
      </View>
    );
  };

  const Filtros = () => {
    return (
      <>
        <Texto style={estilos.titulo}>{tituloFiltros}</Texto>
        <View style={estilos.filtros}>
          {filtragem?.filtros?.map((filtro) => {
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
        data={produtosPesquisados}
        renderItem={({ item }) => (
          <CardProduto
            {...item}
            aoPressionarProduto={() => {
              navigation.navigate("Produto", { item, sacola });
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

      <TopoPesquisa
        textoBarraPesquisa={textoBarraPesquisa}
        filtragem={filtragem}
        aoPesquisar={aoPesquisar}
        sacola={sacola}
      />

      <ModalFiltros
        visivel={modalFiltrosVisivel}
        alterarVisibilidade={alterarVisibilidadeModal}
        filtragem={filtragem}
        setFiltragem={(atualizacao) => setFiltragem(atualizacao)}
        removeChip={removeChip}
        atualizaProdutosPesquisados={atualizaProdutosPesquisados}
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
