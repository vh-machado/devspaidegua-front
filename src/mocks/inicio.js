// Imagens dos cards de destaque
import acai from "../assets/destaque-acai.png";
import peixes from "../assets/destaque-peixes.png";
import frutas from "../assets/destaque-frutas.png";

// Imagens dos cards de pontos turísticos
import mercadoFerro from "../assets/locais/ponto-mercado-ferro.png";
import mercadoCarne from "../assets/locais/ponto-mercado-carne.png";
import feiraSetorFrutas from "../assets/locais/ponto-feira-setor-frutas.png";
import feiraSetorRefeicoes from "../assets/locais/ponto-feira-setor-refeicoes.png";
import solarBeira from "../assets/locais/ponto-solar-beira.png";
import feiraAcai from "../assets/locais/ponto-feira-acai.png";

const inicio = {
  textoBarraPesquisa: "Encontre tudo do Ver-o-Peso",
  tituloDestaques: "Destaques do Ver-o-Peso",
  listaDestaques: [
    {
      key: 0,
      titulo: "Açaí",
      fundo: acai,
      coresGradiente: [
        "rgba(183, 136, 211, 0.5412)",
        "rgba(77, 53, 101, 0.8008)",
        "rgba(77, 53, 101, 0.8)",
        "rgba(77, 53, 101, 1)",
      ],
    },
    {
      key: 1,
      titulo: "Peixes",
      fundo: peixes,
      coresGradiente: [
        "rgba(0, 129, 167, 0.45)",
        "rgba(54, 115, 164, 0.6778)",
        "rgba(86, 107, 163, 0.9)",
        "rgba(86, 107, 163, 1)",
      ],
    },
    {
      key: 2,
      titulo: "Frutas",
      fundo: frutas,
      coresGradiente: [
        "rgba(240, 243, 189, 0.5412)",
        "rgba(211, 150, 149, 0.7563)",
        "rgba(179, 45, 103, 0.8)",
        "rgba(179, 45, 103, 1)",
      ],
    },
  ],
  botaoOfertas: "Ofertas",

  tituloPontosTuristicos: "Conheça os pontos de venda",
  tituloDetalhes: "Detalhes",
  listaPontosTuristicos: [
    { key: 0, titulo: "Mercado de Ferro", imagem: mercadoFerro },
    { key: 1, titulo: "Mercado de Carne", imagem: mercadoCarne },
    { key: 2, titulo: "Feira • Setor de Frutas", imagem: feiraSetorFrutas },
    { key: 3, titulo: "Feira • Setor de Refeições", imagem: feiraSetorRefeicoes },
    { key: 4, titulo: "Solar da Beira", imagem: solarBeira },
    { key: 5, titulo: "Feira do Açaí", imagem: feiraAcai },
  ],
};

export default inicio;
