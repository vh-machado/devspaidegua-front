import React, { useEffect, useCallback } from "react";
//import { StatusBar } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";

import AppRotas from "./src/rotas/AppRotas";
import Cadastro from "./src/telas/Cadastro";
import Inicio from "./src/telas/Inicio";
import { StyleSheet } from "react-native";

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratMedium: Montserrat_500Medium,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={["left", "right", "bottom"]}
        style={estilos.safeAreaView}
        onLayout={onLayoutRootView}
      >
        <StatusBar style="light" translucent={true} />
        <AppRotas />
        {/*<Cadastro />
        <Inicio/>*/}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const estilos = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
