import React, { useEffect, useCallback } from "react";
//import { StatusBar } from 'react-native';
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";

import AppRotas from "./src/rotas/AppRotas";
import LoginRotas from "./src/rotas/LoginRotas";
import cores from "./src/assets/cores";

const usuarioLogado = false;

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
        
        <NavigationContainer>
          {(!usuarioLogado && <LoginRotas />) || <AppRotas />}
        </NavigationContainer>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const estilos = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: cores.cultured,
  },
});
