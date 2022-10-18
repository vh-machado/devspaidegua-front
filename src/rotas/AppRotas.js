import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sacola from "../telas/Sacola";
import AppTabs from "./AppTabs";

const Stack = createNativeStackNavigator();

/** Objeto utilizado para a manipulação da sacola do app*/ 
let sacola = { vendedor: null, produtos: [] };

export default function AppRotas() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Abas">
        {() => <AppTabs sacola={sacola} />}
      </Stack.Screen>
      <Stack.Screen name="Sacola" component={Sacola} />
    </Stack.Navigator>
  );
}

