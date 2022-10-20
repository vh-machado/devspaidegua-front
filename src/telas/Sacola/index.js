import React, { useEffect, useReducer, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

import FundoTopo from "../../assets/backgrounds/topo.svg";
import cores from "../../assets/cores";
import BotaoVoltar from "../../components/BotaoVoltar";
import Texto from "../../components/Texto";
import formataValor from "../../servicos/formataValor";
import BotaoAnimado from "../../components/BotaoAnimado";
import MapaIcone from "../../assets/icons/location.svg";
import ModalLimpar from "./components/ModalLimpar";
import { locais } from "../../mocks/locais";

const width = Dimensions.get("screen").width;

function Topo() {
  return (
    <View style={estilos.topo}>
      <FundoTopo style={{ position: "absolute" }} />

      <View style={estilos.viewRow}>
        <BotaoVoltar tipo={"transparente"} />
        <Texto style={estilos.texto}>Sacola</Texto>
      </View>
    </View>
  );
}

function CardVendedor({ imagem, nome, localizacao }) {

  const {nome: localNome} = locais.find( local => local.id == localizacao);

  return (
    <View style={estilos.cardVendedor}>
      <Image source={imagem} style={estilos.imagemVendedor} />

      <View>
        <Texto style={estilos.nomeVendedor}>{nome}</Texto>

        <View style={estilos.localizacaoInfo}>
          <MapaIcone
            width={"16"}
            height={"16"}
            color={cores.celadonBlue}
          />
          <Texto style={estilos.localizacao}>{localNome}</Texto>
        </View>
      </View>
    </View>
  );
}

function BotoesQuantidade({ id, quantidade, aoPressionarQuantidade }) {
  return (
    <View style={estilos.quantidade}>
      <Pressable
        style={estilos.botaoQuantidade}
        onPress={() => aoPressionarQuantidade("+")}
      >
        <Texto style={estilos.textoQuantidade}>+</Texto>
      </Pressable>
      <Texto style={estilos.numeroQuantidade}>{quantidade}</Texto>
      <Pressable
        style={estilos.botaoQuantidade}
        onPress={() => aoPressionarQuantidade("-")}
      >
        <Texto style={estilos.textoQuantidade}>-</Texto>
      </Pressable>
    </View>
  );
}

function ItemSacola({
  id,
  imagem,
  nome,
  preco,
  quantidade,
  setPrecoTotal,
  calculaPrecoTotal,
  sacolaItens,
  setSacolaItens,
}) {
  const [quantidadeItem, setQuantidadeItem] = useState(quantidade);

  useEffect(() => {
    if (quantidadeItem === 0) {
      let vendedorAtual = sacolaItens.vendedor;

      // Verifica se é o último item do vendedor
      if (sacolaItens?.produtos?.length === 1) {
        vendedorAtual = null;
      }

      setSacolaItens({
        vendedor: vendedorAtual,
        produtos: sacolaItens.produtos.filter((item) => item.id !== id),
      });
    }
    setPrecoTotal(calculaPrecoTotal());

  });

  const aumentaQuantidade = (id) => {
    setQuantidadeItem(
      ++sacolaItens.produtos.find((item) => item.id === id).quantidade
    );
  };

  const diminuiQuantidade = (id) => {
    let buscaItem = sacolaItens.produtos.find((item) => item.id === id);
    setQuantidadeItem(--buscaItem.quantidade);
  };

  return (
    <View style={estilos.item}>
      <Image source={imagem} style={estilos.imagemItem} />

      <View style={estilos.infoItem}>
        <View>
          <Texto style={estilos.nomeItem}>{nome}</Texto>
          <Texto style={estilos.precoItem}>{formataValor(preco)}</Texto>
        </View>

        <BotoesQuantidade
          id={id}
          quantidade={quantidadeItem}
          aoPressionarQuantidade={(tipo) =>
            tipo === "+" ? aumentaQuantidade(id) : diminuiQuantidade(id)
          }
        />
      </View>
    </View>
  );
}

function Resumo({ precoTotal, sacolaItens, alterarVisibilidade }) {
  
  let numeroWhatsapp = "+55(091)983447889";

  const aoPressionaFinalizar = () => {
    let produtos = "";
    sacolaItens.produtos.forEach((item) => {
      produtos += `-%20${item.quantidade}x%20${item.nome}%0a`;
    });
    produtos += `Total:%20${formataValor(precoTotal).replace(" ", "%20")}`;

    Linking.openURL(
      `https://wa.me/${numeroWhatsapp}?text=Olá,%20vim%20do%20app%20Veropa,%20gostaria%20de%20comprar:%0a${produtos}`
    );
  };

  return (
    <View style={estilos.resumo}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Texto style={estilos.total}>Total</Texto>
        <Texto style={estilos.precoTotal}>{formataValor(precoTotal)}</Texto>
      </View>

      <View style={estilos.linha} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <BotaoAnimado
          estilo={estilos.botaoRemover}
          onPress={alterarVisibilidade}
        >
          <MaterialCommunityIcons
            name="delete"
            size={30}
            color={cores.bittersweet}
          />
        </BotaoAnimado>

        <BotaoAnimado
          estilo={estilos.botaoFinalizar}
          onPress={aoPressionaFinalizar}
        >
          <Texto style={estilos.tituloFinalizar}>Finalizar</Texto>
          <Octicons
            name="chevron-right"
            size={30}
            color={"white"}
            style={{ position: "absolute", right: 12 }}
          />
        </BotaoAnimado>
      </View>
    </View>
  );
}

export default function Sacola() {
  const navigation = useNavigation();

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

  const route = useRoute();
  let sacola = route.params;



  const [sacolaItens, setSacolaItens] = useState(sacola);
  const [precoTotal, setPrecoTotal] = useState(calculaPrecoTotal())
  const [modalLimparVisivel, alterarVisibilidadeModal] = useReducer(
    (modalLimparVisivel) => !modalLimparVisivel,
    false
  );

  /** Calcula o valor total do pedido */
  function calculaPrecoTotal () {
    let total = 0
    sacolaItens.produtos.forEach((item) => {
      total += item.quantidade*item.preco;
    });
    return total;
  }

  function limparSacola() {
    sacolaItens.vendedor = null;
    sacolaItens.produtos = [];
    setSacolaItens({ ...sacolaItens });
  }

  return (
    <>
      <Topo />

      {sacolaItens?.vendedor !== null && (
        <FlatList
          style={{ flex: 1 }}
          data={sacolaItens.produtos}
          contentContainerStyle={estilos.flatlist}
          renderItem={({ item }) => (
            <ItemSacola
              {...item}
              setPrecoTotal={setPrecoTotal}
              calculaPrecoTotal={calculaPrecoTotal}
              sacolaItens={sacolaItens}
              setSacolaItens={setSacolaItens}
            />
          )}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => {
            return (
              <>
                <CardVendedor {...sacolaItens.vendedor} />

                <View style={estilos.linha} />
              </>
            );
          }}
        />
      )}

      {sacolaItens?.produtos?.length > 0 && (
        <Resumo
          precoTotal={precoTotal}
          sacolaItens={sacolaItens}
          alterarVisibilidade={alterarVisibilidadeModal}
        />
      )}

      <ModalLimpar
        visivel={modalLimparVisivel}
        alterarVisibilidade={alterarVisibilidadeModal}
        limparSacola={limparSacola}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    top: 0,
    width: "100%",
    height: (120 / 360) * width,
    justifyContent: "flex-end",
    overflow: "hidden",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
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

  viewRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 24,
  },

  texto: {
    marginStart: width / 2 - 75 - 48,
    fontWeight: "600",
    fontSize: 14,
    color: "white",
  },

  flatlist: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  item: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
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

  infoItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
  },

  imagemItem: {
    height: "100%",
    width: "25%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  nomeItem: {
    fontSize: 14,
    fontWeight: "600",
    color: cores.onyx,
    marginBottom: 12,
  },

  precoItem: {
    fontSize: 12,
    fontWeight: "500",
    color: cores.spanishGray,
  },

  quantidade: {
    alignItems: "center",
  },

  numeroQuantidade: {
    height: 20,
    fontSize: 12,
    fontWeight: "600",
    color: cores.celadonBlue,
    textAlignVertical: "center",
  },

  botaoQuantidade: {
    width: 24,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cores.gainsboro,
    borderRadius: 4,
  },

  textoQuantidade: {
    fontSize: 14,
    fontWeight: "600",
    color: cores.celadonBlue,
  },

  resumo: {
    backgroundColor: "white",
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 15,
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
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

  total: {
    fontSize: 16,
    fontWeight: "600",
    color: cores.onyx,
  },

  precoTotal: {
    fontSize: 14,
    fontWeight: "500",
    color: cores.onyx,
  },

  linha: {
    height: 1,
    backgroundColor: cores.gainsboro,
    marginVertical: 20,
  },

  botaoFinalizar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: cores.persianGreen,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  tituloFinalizar: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },

  botaoRemover: {
    borderWidth: 1,
    borderColor: cores.bittersweet,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 12,
    marginEnd: 24,
  },

  cardVendedor: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
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

  imagemVendedor: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    marginEnd: 15,
  },

  nomeVendedor: {
    color: cores.onyx,
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
  },

  localizacaoInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  localizacao: {
    color: cores.celadonBlue,
    fontSize: 12,
    fontWeight: "500",
    marginStart: 5,
  },

  /*
  modal: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },

  tituloModal: {
    color: cores.onyx,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },

  textoModal: {
    color: cores.onyx,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 30,
  },

  botaoLimpar: {
    flex: 1,
    padding: 15,
    backgroundColor: cores.bittersweet,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 5,
  },

  botaoCancelar: {
    flex: 1,
    padding: 15,
    backgroundColor: cores.spanishGray,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 5,
  },

  tituloBotaoLimpar: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  */

  tabBar: {
    position: "absolute",
    bottom: 0,
    height: 55,
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});
