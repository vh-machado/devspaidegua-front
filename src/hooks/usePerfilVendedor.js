import { useState, useEffect } from "react";

import { carregaPerfilVendedor } from "../servicos/carregaDados";

export default function usePerfilVendedor() {
  const [perfilVendedor, setPerfilVendedor] = useState({});

  useEffect(() => {
    const retorno = carregaPerfilVendedor();
    setPerfilVendedor(retorno);
  }, []);

  return perfilVendedor;
}