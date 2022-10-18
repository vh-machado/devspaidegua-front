import fotoProduto from "../assets/tucupi.jpg";

const perfil = {
  nomeUsuario: "Nome Vendedor",
  valorEstrelas: "4.0",
  valorClientes: 45,
  tituloEstrelas: "estrelas",
  tituloClientes: "clientes",
  descricaoVendedor:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  botaoEditarPerfil: "Editar perfil",
  botaoEditarCatalogo: "Editar catálogo",
  numeroWhatsapp: "+55(091)983447889",
  contaInstagram: "instagram",
  tituloLocalizacao: "Onde encontrar",
  nomeLocalizacao: "Feira do Ver-o-Peso",
  setorLocalizacao: "Setor de Frutas",
  botaoMapa: "Ver no mapa",
  tituloProdutos: "O que vende",

  produtos: [
    {
      id: 0,
      nome: "Fruta1",
      preco: 2.8,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 1,
      filtro: "Manga",
    },
    {
      id: 1,
      nome: "Fruta2",
      preco: 2.0,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 1,
      filtro: "Banana",
    },
    {
      id: 2,
      nome: "Carne1",
      preco: 2.0,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Pá",
    },
    {
      id: 3,
      nome: "Carne2",
      preco: 4.0,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Agulha",
    },
    {
      id: 4,
      nome: "Carne3",
      preco: 2.5,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Agulha",
    },
    {
      id: 5,
      nome: "Carne4",
      preco: 4.25,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Picanha",
    },
  ],
};

export default perfil;
