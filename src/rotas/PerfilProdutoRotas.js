import React from "react";
import Perfil from "../telas/Perfil";
import ProdutoRotas from "./ProdutoRotas";

export default function PerfilProdutoRotas({sacola}) {
  return (
    <ProdutoRotas ComponenteOrigem={() => <Perfil sacola={sacola} />}/>
  );
}
