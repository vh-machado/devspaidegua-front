import acai from "../assets/destaque-acai.png";
import peixes from "../assets/destaque-peixes.png";
import frutas from "../assets/destaque-frutas.png";

const inicio = {
  textoBarraPesquisa: "Encontre produtos e locais do Ver-o-Peso",
  destaques: {
    tituloDestaques: "Destaques do Ver-o-Peso",
    listaDestaques: [
      { key: 'acai', titulo: "Açaí", fundo: acai },
      { key: 'peixes',  titulo: "Peixes", fundo: peixes },
      { key: 'frutas', titulo: "Frutas", fundo: frutas },
    ],
  },
  botaoOfertas: {
    texto: "Ofertas",
    icone: null,
  },

  pontosTuristicos: {
    titulo: "Conheça os pontos turísticos",
    cardPontoTuristico: {
      iconeLocalizacao: null,
      iconeDetalhes: null,
      tituloDetalhes: "Detalhes",
    },
    lista: [
      { titulo: "Mercado de Ferro", imagem: null },
      { titulo: "Mercado de Carne", imagem: null },
      { titulo: "Solar da Beira", imagem: null },
      { titulo: "Feira do Açaí", imagem: null },
      { titulo: "Praça do Relógio", imagem: null },
      { titulo: "Praça Dom Pedro II", imagem: null },
      { titulo: "Ladeira do Castelo", imagem: null },
    ],
  },
};

export default inicio;
