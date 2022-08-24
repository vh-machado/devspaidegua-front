import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import Inicio from "../telas/Inicio";
import cores from "../assets/cores";
import MapaIcone from "../assets/icons/location.svg"
import FeiraIcone from "../assets/icons/market_stall.svg";
import Mapa from "../telas/Mapa";
import Feira from "../telas/Feira";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: estilos.tabBar,
          tabBarLabelStyle: estilos.tabBarLabel,
          tabBarItemStyle: estilos.tabBarItem,
          tabBarIcon: ({ color }) => {
            let Icon = <Entypo style={estilos.tabBadge} name="home" size={30} color={color}/>;

            if (route.name === "Mapa") {
              Icon = <MapaIcone style={estilos.tabBadge} color={color}/>;
              
            } else if (route.name === "Feira") {
              Icon = <FeiraIcone color={color}/>
            }
            return Icon;
          },
          tabBarActiveTintColor: cores.celadonBlue,
          tabBarInactiveTintColor: cores.spanishGray,
        })}
      >
        <Tab.Screen name="Início" component={Inicio} />
        <Tab.Screen name="Mapa" component={Mapa} />
        <Tab.Screen name="Feira" component={Feira} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    height: 53,
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },

  tabBarLabel: {
    fontSize: 10,
    fontFamily: 'MontserratMedium',
  },

  tabBarItem: {
    paddingVertical: 5,
  }
})
