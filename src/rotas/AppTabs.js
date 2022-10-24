import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import cores from "../assets/cores";
import MapaIcone from "../assets/icons/location.svg";
import FeiraIcone from "../assets/icons/market_stall.svg";
import Mapa from "../telas/Mapa";
import PerfilProdutoRotas from "./PerfilProdutoRotas";
import FeiraProdutoRotas from "./FeiraProdutoRotas";
import Inicio from "../telas/Inicio";
import useUser from "../hooks/useUser";
import PerfilCliente from "../telas/PerfilCliente";

const Tab = createBottomTabNavigator();

export default function AppTabs({ sacola }) {
  const { userIsSeller } = useUser();

  const [pesquisaInicio, setPesquisaInicio] = useState({
    pesquisa: "",
    categoria: null,
    filtros: [],
  });

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: estilos.tabBar,
        tabBarLabelStyle: estilos.tabBarLabel,
        tabBarItemStyle: estilos.tabBarItem,
        tabBarIcon: ({ color }) => {
          let Icon = (
            <Entypo
              style={estilos.tabBadge}
              name="home"
              size={24}
              color={color}
            />
          );

          if (route.name === "Mapa") {
            Icon = <MapaIcone style={estilos.tabBadge} color={color} />;
          } else if (route.name === "Feira") {
            Icon = <FeiraIcone color={color} />;
          } else if (route.name === "Perfil") {
            Icon = <FontAwesome5 name="user-alt" size={20} color={color} />;
          }
          return Icon;
        },
        tabBarActiveTintColor: cores.celadonBlue,
        tabBarInactiveTintColor: cores.spanishGray,
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Inicio">
        {() => (
          <Inicio
            sacola={sacola}
            pesquisaInicio={pesquisaInicio}
            setPesquisaInicio={setPesquisaInicio}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Mapa">{() => <Mapa sacola={sacola} />}</Tab.Screen>
      <Tab.Screen name="Feira">
        {() => (
          <FeiraProdutoRotas
            sacola={sacola}
            pesquisaInicio={pesquisaInicio}
            setPesquisaInicio={setPesquisaInicio}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Perfil">
        {() =>
          userIsSeller ? (
            <PerfilProdutoRotas sacola={sacola} />
          ) : (
            <PerfilCliente sacola={sacola} />
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const estilos = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    height: 55,
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },

  tabBarLabel: {
    fontSize: 10,
    fontFamily: "MontserratMedium",
  },

  tabBarItem: {
    paddingVertical: 5,
  },
});
