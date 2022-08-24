import React from "react";

import TopoPesquisa from "../../components/TopoPesquisa";
import useMapa from "../../hooks/useMapa";

export default function Mapa() {
  const {textoBarraPesquisa} = useMapa();

  return (
    <>
      <TopoPesquisa textoBarraPesquisa={textoBarraPesquisa}/>
    </>
  );
}
