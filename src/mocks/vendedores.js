import iconeVendedor1 from "../assets/vendedores/icone-vendedor1.jpg";
import iconeVendedor2 from "../assets/vendedores/icone-vendedor2.jpg";
import iconeVendedor3 from "../assets/vendedores/icone-vendedor3.jpg";
import iconeVendedor4 from "../assets/vendedores/icone-vendedor4.jpg";
import barracaFrutas from "../assets/vendedores/barraca-frutas.jpg";
import barracaPeixes from "../assets/vendedores/barraca-peixes.jpg"
import barracaCarnes from "../assets/vendedores/barraca-carnes.jpg"
import barracaRefeicoes from "../assets/vendedores/barraca-refeicoes.jpg"


export const vendedores = [
  {
    id: 1,
    imagem: iconeVendedor1,
    nome: "Vendedor 1",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    localizacao: 0,
    capa: barracaPeixes,
    avaliacaoEstrelas: "4.5",
    numeroCurtidas: 45,
    numeroWhatsapp: "+55(091)983447889",
    contaInstagram: "instagram",
  },
  {
    id: 2,
    imagem: iconeVendedor2,
    nome: "Vendedor 2",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    localizacao: 1,
    capa: barracaCarnes,
    avaliacaoEstrelas: "5.0",
    numeroCurtidas: 118,
    numeroWhatsapp: "+55(091)983447889",
    contaInstagram: "instagram",
  },
  {
    id: 3,
    imagem: iconeVendedor3,
    nome: "Vendedor 3",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    localizacao: 2,
    capa: barracaFrutas,
    avaliacaoEstrelas: "2.0",
    numeroCurtidas: 10,
    numeroWhatsapp: "+55(091)983447889",
    contaInstagram: "instagram",
  },
  {
    id: 4,
    imagem: iconeVendedor4,
    nome: "Vendedor 4",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    localizacao: 3,
    capa: barracaRefeicoes,
    avaliacaoEstrelas: "2.0",
    numeroCurtidas: 10,
    numeroWhatsapp: "+55(091)983447889",
    contaInstagram: "instagram",
  },
];
