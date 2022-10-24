import fotoVendedor from "../assets/foto-usuario.jpeg";
import barracaFrutas from "../assets/vendedores/barraca-frutas.jpg";
import barracaPeixes from "../assets/vendedores/barraca-peixes.jpg"
import barracaCarnes from "../assets/vendedores/barraca-carnes.jpg"

export const vendedores = [
  {
    id: 1,
    imagem: fotoVendedor,
    nome: "Vendedor 1",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    localizacao: 2,
    capa: barracaPeixes,
    avaliacaoEstrelas: "4.5",
    numeroCurtidas: 45,
    numeroWhatsapp: "+55(091)983447889",
    contaInstagram: "instagram",
  },
  {
    id: 2,
    imagem: fotoVendedor,
    nome: "Vendedor 2",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    localizacao: 3,
    capa: barracaCarnes,
    avaliacaoEstrelas: "5.0",
    numeroCurtidas: 118,
    numeroWhatsapp: "+55(091)983447889",
    contaInstagram: "instagram",
  },
  {
    id: 3,
    imagem: fotoVendedor,
    nome: "Vendedor 3",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    localizacao: 1,
    capa: barracaFrutas,
    avaliacaoEstrelas: "2.0",
    numeroCurtidas: 10,
    numeroWhatsapp: "+55(091)983447889",
    contaInstagram: "instagram",
  },
];
