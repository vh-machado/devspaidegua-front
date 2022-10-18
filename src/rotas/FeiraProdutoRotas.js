import React from "react";
import Feira from "../telas/Feira";
import ProdutoRotas from "./ProdutoRotas";

export default function FeiraProdutoRotas({sacola}) {
  return (
    <ProdutoRotas ComponenteOrigem={() => <Feira sacola={sacola}/>}/>
  );
}
