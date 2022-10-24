import React from "react";
import Feira from "../telas/Feira";
import ProdutoRotas from "./ProdutoRotas";

export default function FeiraProdutoRotas({
  sacola,
  pesquisaInicio,
  setPesquisaInicio,
}) {
  return (
    <ProdutoRotas
      ComponenteOrigem={() => (
        <Feira
          sacola={sacola}
          pesquisaInicio={pesquisaInicio}
          setPesquisaInicio={setPesquisaInicio}
        />
      )}
    />
  );
}
