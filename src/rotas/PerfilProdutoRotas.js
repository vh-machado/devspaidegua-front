import React from "react";
import PerfilVendedor from "../telas/PerfilVendedor";
import ProdutoRotas from "./ProdutoRotas";

export default function PerfilProdutoRotas({sacola}) {
  return (
    <ProdutoRotas ComponenteOrigem={() => <PerfilVendedor sacola={sacola} />}/>
  );
}
