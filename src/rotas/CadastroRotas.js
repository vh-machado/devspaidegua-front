import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "../telas/Cadastro";
import AppRotas from "./AppRotas";

const Stack = createNativeStackNavigator();

export default function CadastroRota() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="AppRotas" component={AppRotas} />
      </Stack.Navigator>
  );
}
