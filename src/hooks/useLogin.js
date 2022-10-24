import { useState, useEffect } from "react";

import { carregaLogin } from "../servicos/carregaDados";

export default function useLogin() {
  const [login, setLogin] = useState({});

  useEffect(() => {
    const retorno = carregaLogin();
    setLogin(retorno);
  }, []);

  return login;
}