import { useState, useEffect } from "react";

import { carregaMapa } from "../servicos/carregaDados";

export default function useMapa() {
  const [mapa, setMapa] = useState({textoBarraPesquisa: ""});

  useEffect(() => {
    const retorno = carregaMapa();
    setMapa(retorno);
  }, []);

  return mapa;
}