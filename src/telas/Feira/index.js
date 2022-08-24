import React from "react";

import TopoPesquisa from "../../components/TopoPesquisa";
import useFeira from "../../hooks/useFeira";

export default function Feira() {
  const {textoBarraPesquisa} = useFeira();

  return (
    <>
      <TopoPesquisa textoBarraPesquisa={textoBarraPesquisa}/>
    </>
  );
}
