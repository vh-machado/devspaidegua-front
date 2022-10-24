import { useState, useEffect } from "react";

import { carregaUser } from "../servicos/carregaDados";

export default function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const retorno = carregaUser();
    setUser(retorno);
  }, []);

  return user;
}