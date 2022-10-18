import React from "react";

import TopoPesquisa from "../../components/TopoPesquisa";
import useMapa from "../../hooks/useMapa";

export default function Mapa({sacola}) {
  const {textoBarraPesquisa} = useMapa();

  return (
    <>
      <TopoPesquisa textoBarraPesquisa={textoBarraPesquisa} sacola={sacola}/>
    </>
  );
}
