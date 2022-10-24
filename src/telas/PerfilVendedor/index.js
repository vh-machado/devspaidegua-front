import React from "react";
import { FlatList, StyleSheet, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import cores from "../../assets/cores";
import Texto from "../../components/Texto";
import BotaoContato from "./components/BotaoContato";
import BotaoEditar from "./components/BotaoEditar";
import CardFeedback from "./components/CardFeedback";
import CardLocalizacao from "./components/CardLocalizacao";
import TopoPerfilVendedor from "./components/TopoPerfilVendedor";
import CardProduto from "../Feira/components/CardProduto";
import { locais } from "../../mocks/locais";
import usePerfilVendedor from "../../hooks/usePerfilVendedor";
import { produtos } from "../../mocks/produtos";
import useUser from "../../hooks/useUser";


const InfoPerfil = () => {
  const route = useRoute();

  const { descricao } = route.params ? route.params : useUser();

  return (
    <>
      <View style={estilos.infoPerfil}>
        <CardFeedback tipo={"estrelas"} />
        <CardFeedback tipo={"clientes"} />
      </View>

      <Texto style={estilos.descricao}>{descricao}</Texto>
    </>
  );
};

const BotoesContato = () => {
  const route = useRoute();
  const { numeroWhatsapp, contaInstagram } = route.params;

  return (
    <View style={estilos.infoPerfil}>
      {contaInstagram && (
        <BotaoContato tipo={"instagram"} contato={contaInstagram} />
      )}
      {numeroWhatsapp && (
        <BotaoContato tipo={"whatsapp"} contato={numeroWhatsapp} />
      )}
    </View>
  );
};

const BotoesEditar = () => {
  return (
    <View style={estilos.infoPerfil}>
      <BotaoEditar tipo={"editar-perfil"} />
      <BotaoEditar tipo={"editar-catalogo"} />
    </View>
  );
};

function Localizacao() {
  const route = useRoute();
  const { tituloLocalizacao } = usePerfilVendedor();
  const { localizacao } = route.params !== undefined ? route.params : useUser();
  const local = locais.find((busca) => busca?.id == localizacao);

  return (
    <View style={estilos.localizacao}>
      <Texto style={estilos.tituloLocalizacao}>{tituloLocalizacao}</Texto>
      <CardLocalizacao {...local} />
    </View>
  );
}

/** Tela de perfil do vendedor
 * @param {Object} sacola itens escolhidos para compra
 */
export default function PerfilVendedor({ sacola }) {
  const navigation = useNavigation();
  const route = useRoute();

  const { tituloProdutos } = usePerfilVendedor();
  const { id } = route.params ? route.params : useUser();

  const produtosVendedor = produtos.filter((produto) => produto.vendedor == id);

  return (
    <SafeAreaView style={estilos.safeArea}>
      <View style={estilos.fundo}>
        <TopoPerfilVendedor />

        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 60 }}
          columnWrapperStyle={estilos.flatlist}
          data={produtosVendedor}
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
                <InfoPerfil />

                {(route.params && <BotoesContato />) || <BotoesEditar />}

                <View style={estilos.linha} />

                <Localizacao />

                <Texto style={estilos.tituloProdutos}>{tituloProdutos}</Texto>
              </>
            );
          }}
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
    flex: 1,
    height: "100%",
    backgroundColor: cores.cultured,
  },

  infoPerfil: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginVertical: 20,
  },

  descricao: {
    fontSize: 12,
    fontWeight: "normal",
    color: cores.spanishGray,
    marginHorizontal: 24,
    marginVertical: 10,
    textAlign: "center",
    lineHeight: 15,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: cores.gainsboro,
    marginHorizontal: 24,
    marginVertical: 5,
  },

  localizacao: {
    marginHorizontal: 24,
  },

  tituloLocalizacao: {
    fontSize: 14,
    fontWeight: "600",
    color: cores.onyx,
    marginVertical: 10,
  },

  tituloProdutos: {
    marginHorizontal: 24,
    fontSize: 14,
    fontWeight: "600",
    color: cores.onyx,
    marginVertical: 10,
  },

  flatlist: {
    paddingHorizontal: 16,
  },

  cardProduto: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 8,
    shadowColor: cores.onyx,
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

  fotoProduto: {
    width: "100%",
    height: (1147 / 1500) * 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },

  infoProduto: {
    padding: 12,
  },

  nomeProduto: {
    color: cores.onyx,
    fontSize: 12,
    fontWeight: "600",
  },

  precoProduto: {
    marginTop: 18,
    color: cores.persianGreen,
    fontSize: 12,
    fontWeight: "600",
  },
});
