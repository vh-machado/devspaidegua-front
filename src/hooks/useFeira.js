import { useState, useEffect } from "react";

import { carregaFeira } from "../servicos/carregaDados";

export default function useFeira() {
  const [feira, setFeira] = useState({textoBarraPesquisa: ""});

  useEffect(() => {
    const retorno = carregaFeira();
    setFeira(retorno);
  }, []);

  return feira;
}