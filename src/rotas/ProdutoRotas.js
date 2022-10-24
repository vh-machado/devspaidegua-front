import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Produto from "../telas/Produto";
import PerfilVendedor from "../telas/PerfilVendedor";

const Stack = createNativeStackNavigator();

export default function ProdutoRotas({ ComponenteOrigem }) {

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='ProdutoOrigem' component={ComponenteOrigem} />
        <Stack.Screen name='Produto' component={Produto} />
        <Stack.Screen name='PerfilVendedor' component={PerfilVendedor} />
      </Stack.Navigator>
  );
}
