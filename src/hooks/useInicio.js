import { useState, useEffect } from "react";

import { carregaInicio } from "../servicos/carregaDados";

export default function useInicio() {
  const [inicio, setInicio] = useState({
    textoBarraPesquisa: "",
    tituloDestaques: "",
    listaDestaques: [
      {
        key: 0,
        titulo: "",
        fundo: null,
        coresGradiente: [
          "rgba(255,255,255,0.4)",
          "rgba(255,255,255,0.3)",
          "rgba(255,255,255,0.2)",
          "transparent",
        ],
      },
    ],
    botaoOfertas: "",

    tituloPontosTuristicos: "",
    tituloDetalhes: "",
    listaPontosTuristicos: [{ key: 0, titulo: "", imagem: null, estiloTitulo: "" }],
  });

  useEffect(() => {
    const retorno = carregaInicio();
    setInicio(retorno);
  }, []);

  return inicio;
}
