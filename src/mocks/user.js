import fotoVendedor from "../assets/foto-usuario.jpeg";
import barracaFrutas from "../assets/vendedores/barraca-frutas.jpg";

import fotoCliente from "../assets/foto-usuario.jpeg";

const userVendedor = {
  id: 2,
  userIsSeller: true,
  nome: "Vendedor 2",
  imagem: fotoVendedor,
  capa: barracaFrutas,
  localizacao: 3,
  descricao:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  avaliacaoEstrelas: "5.0",
  numeroCurtidas: 118,
  tituloEstrelas: "estrelas",
  tituloClientes: "clientes",
  botaoEditarPerfil: "Editar perfil",
  botaoEditarCatalogo: "Editar catálogo",
  numeroWhatsapp: "+55(091)983447889",
  contaInstagram: "instagram",
};

const userCliente = {
    id: 1,
    userIsSeller: false,
    nome: "Cliente 1",
    email: 'cliente@gmail.com',
    imagem: fotoCliente,
    favoritos: [],
    avaliacoes: [],
};

const user = userCliente;

export default user;

