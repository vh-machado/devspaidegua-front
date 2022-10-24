import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useReducer } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import cores from "../../assets/cores";
import BotaoVoltar from "../../components/BotaoVoltar";
import Texto from "../../components/Texto";
import { vendedores } from "../../mocks/vendedores";
import formataValor from "../../servicos/formataValor";
import ModalLimpar from "../Sacola/components/ModalLimpar";
import BotaoCompra from "./components/BotaoCompra";
import CardVendedor from "./components/CardVendedor";

export default function Produto() {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    item: { id, nome, preco, imagem, descricao, vendedor },
    sacola,
  } = route.params;

  const [modalLimparVisivel, alterarVisibilidadeModal] = useReducer(
    (modalLimparVisivel) => !modalLimparVisivel,
    false
  );

  // Limpa a sacola e adiciona o produto
  function limparSacola() {
    sacola.vendedor = null;
    sacola.produtos = [];
    adicionaNaSacola();
  }

  useEffect(() => {
    // Esconde a barra de navegação
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });

    // Mostra a barra de navegação novamente ao fechar a tela
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: estilos.tabBar,
      });
  }, [navigation]);

  const adicionaNaSacola = () => {
    if (sacola.vendedor === null || sacola.vendedor?.id === vendedor) {
      sacola.vendedor = {
        ...vendedores.find((busca) => busca.id === vendedor),
      };

      // Verifica se o item já está na sacola
      let buscaItem = sacola.produtos.find((item) => item.id === id);

      if (buscaItem === undefined) {
        sacola.produtos.push({
          id,
          nome,
          preco,
          imagem,
          descricao,
          quantidade: 1,
        });
      } else {
        buscaItem.quantidade++;
      }

      navigation.canGoBack() ? navigation.goBack() : null;
    } else {
      alterarVisibilidadeModal();
    }
  };

  const InfoProduto = () => {
    return (
      <View style={estilos.info}>
        <Texto style={estilos.tituloProduto}>{nome}</Texto>
        <Texto style={estilos.preco}>{formataValor(preco)}</Texto>

        <ScrollView style={estilos.scroll} showsVerticalScrollIndicator={false}>
          <Texto style={estilos.descricao}>{descricao}</Texto>

          <CardVendedor
            vendedor={vendedores.find((busca) => busca.id === vendedor)}
          />
        </ScrollView>
      </View>
    );
  };

  const BarraCompra = () => {
    return (
      <View style={estilos.barraCompra}>
        <BotaoCompra
          tipo={"cesta"}
          aoPressionarSacola={() => adicionaNaSacola()}
        />
        <BotaoCompra tipo={"contato"} nomeProduto={nome} />
      </View>
    );
  };

  return (
    <SafeAreaView style={estilos.safeArea}>
      <View style={estilos.fundo}>
        <ImageBackground source={imagem} style={estilos.imagemProduto}>
          <BotaoVoltar tipo={"branco"} />
        </ImageBackground>

        <InfoProduto />

        <BarraCompra />

        <ModalLimpar
          visivel={modalLimparVisivel}
          alterarVisibilidade={alterarVisibilidadeModal}
          limparSacola={limparSacola}
        />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: cores.persianGreen,
  },

  fundo: {
    height: "100%",
    backgroundColor: cores.cultured,
    paddingBottom: 70,
  },

  imagemProduto: {
    height: 350,
    paddingTop: 30,
  },

  info: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 10,
  },

  tituloProduto: {
    color: cores.onyx,
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 24,
  },

  preco: {
    color: cores.persianGreen,
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
    paddingHorizontal: 24,
  },

  descricao: {
    flex: 1,
    color: cores.onyx,
    fontSize: 12,
    fontWeight: "normal",
    marginVertical: 10,
    paddingHorizontal: 24,
  },

  barraCompra: {
    padding: 8,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
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

  tabBar: {
    position: "absolute",
    bottom: 0,
    height: 55,
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});
