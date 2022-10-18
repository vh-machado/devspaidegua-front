import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, View, Pressable } from "react-native";
import { Badge, Searchbar } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import cores from "../assets/cores";
import FundoTopo from "../assets/backgrounds/topo.svg";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;

export default function TopoPesquisa({ textoBarraPesquisa, sacola }) {
  const navigation = useNavigation();

  const [contadorBadge, setContadorBadge] = useState(contabilizaProdutos());

  function contabilizaProdutos() {
    let contador = 0;
    sacola.produtos.forEach((produto) => {
      contador += produto.quantidade;
    });

    return contador;
  }

  useEffect(() => {
    const atualizaBadge = navigation.addListener("focus", () => {
      setContadorBadge(contabilizaProdutos());
    });

    return atualizaBadge;
  }, [navigation]);

  useEffect(() => {
    sacola.produtos = sacola?.produtos?.filter((item) => item.quantidade > 0);
    if (sacola?.produtos?.length === 0) sacola.vendedor = null;
  }, [sacola]);

  return (
    <View style={estilos.topo}>
      <FundoTopo style={{ position: "absolute" }} />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Searchbar
          style={estilos.barraPesquisa}
          inputStyle={estilos.texto}
          placeholderTextColor={cores.battleshipGrey}
          placeholder={textoBarraPesquisa}
          theme={{ colors: { primary: cores.celadonBlue } }}
          icon={() => (
            <Ionicons name="search" size={20} color={cores.battleshipGrey} />
          )}
          clearIcon
        />

        <Pressable
          style={estilos.botaoSacola}
          onPress={() => navigation.navigate("Sacola", sacola)}
        >
          <MaterialCommunityIcons name="shopping" size={24} color="white" />
          <Badge visible={sacola.vendedor !== null} style={estilos.badgeSacola}>
            {contadorBadge}
          </Badge>
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    position: "absolute",
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

  barraPesquisa: {
    flex: 1,
    flexDirection: "row",
    height: 45,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
    borderRadius: 25,
    borderColor: cores.platinum,
    borderWidth: 1,
  },

  texto: {
    fontFamily: "MontserratSemiBold",
    fontSize: 10,
    color: cores.battleshipGrey,
    textAlignVertical: "center",
    marginStart: -10,
  },

  botaoSacola: {
    justifyContent: "center",
    alignItens: "center",
    marginStart: 5,
    marginEnd: 30,
  },

  badgeSacola: {
    backgroundColor: cores.bittersweet,
    position: "absolute",
    color: "white",
    top: -10,
    right: -10,
  },
});
