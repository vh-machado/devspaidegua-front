import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "../telas/Cadastro";
import AppRotas from "./AppRotas";
import Login from "../telas/Login";

const Stack = createNativeStackNavigator();

export default function LoginRotas() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="AppRotas" component={AppRotas} />
      </Stack.Navigator>
  );
}
