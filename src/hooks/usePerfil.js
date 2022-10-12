import { useState, useEffect } from "react";

import { carregaPerfil } from "../servicos/carregaDados";

export default function usePerfil() {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    const retorno = carregaPerfil();
    setPerfil(retorno);
  }, []);

  return perfil;
}