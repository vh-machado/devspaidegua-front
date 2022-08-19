import React from "react";

import { Image } from "react-native";

export default function CardDestaque({ item: { titulo, fundo } }) {
    console.log(titulo)

  return <Image source={fundo}></Image>;
}
