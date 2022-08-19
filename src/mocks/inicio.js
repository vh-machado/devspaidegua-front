// Imagens dos cards de destaque
import acai from "../assets/destaque-acai.png";
import peixes from "../assets/destaque-peixes.png";
import frutas from "../assets/destaque-frutas.png";

// Imagens dos cards de pontos turísticos
import mercadoFerro from "../assets/ponto-mercado-ferro.png";
import mercadoCarne from "../assets/ponto-mercado-carne.png";
import solarBeira from "../assets/ponto-solar-beira.png";
import feiraAcai from "../assets/ponto-feira-acai.png";
import pracaRelogio from "../assets/ponto-praca-relogio.png";
import pracaDomPedro2 from "../assets/ponto-praca-dpedro2.png";
import ladeiraCastelo from "../assets/ponto-ladeira-castelo.png";

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

  tituloPontosTuristicos: "Conheça os pontos turísticos",
  tituloDetalhes: "Detalhes",
  listaPontosTuristicos: [
    { key: 0, titulo: "Mercado de Ferro", imagem: mercadoFerro },
    { key: 1, titulo: "Mercado de Carne", imagem: mercadoCarne },
    { key: 2, titulo: "Solar da Beira", imagem: solarBeira },
    { key: 3, titulo: "Feira do Açaí", imagem: feiraAcai },
    { key: 4, titulo: "Praça do Relógio", imagem: pracaRelogio },
    { key: 5, titulo: "Praça Dom Pedro II", imagem: pracaDomPedro2 },
    { key: 6, titulo: "Ladeira do Castelo", imagem: ladeiraCastelo, estiloTitulo: 'light' },
  ],
};

export default inicio;
