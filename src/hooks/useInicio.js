import { useState, useEffect } from "react";

import { carregaInicio } from "../servicos/carregaDados";

export default function useInicio() {
  const [inicio, setInicio] = useState({
    textoBarraPesquisa: "",
    destaques: {
      tituloDestaques: "",
      listaDestaques: [
        { key: "", titulo: "", fundo: null },
        { key: "", titulo: "", fundo: null },
        { key: "", titulo: "", fundo: null },
      ],
    },
    botaoOfertas: {
      texto: "",
      icone: null,
    },

    pontosTuristicos: {
      titulo: "",
      cardPontoTuristico: {
        iconeLocalizacao: null,
        iconeDetalhes: null,
        tituloDetalhes: "",
      },
      lista: [
        { titulo: "", imagem: null },
        { titulo: "", imagem: null },
        { titulo: "", imagem: null },
        { titulo: "", imagem: null },
        { titulo: "", imagem: null },
        { titulo: "", imagem: null },
        { titulo: "", imagem: null },
      ],
    },
  });

  useEffect(() => {
    const retorno = carregaInicio();
    setInicio(retorno);
  }, []);

  return inicio;
}
