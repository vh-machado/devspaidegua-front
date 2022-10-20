import fotoProduto from "../assets/tucupi.jpg";

const perfilVendedor = {
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
  idLocalizacao: 1,
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
      vendedor: 3,
    },
    {
      id: 1,
      nome: "Fruta2",
      preco: 2.0,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 1,
      filtro: "Banana",
      vendedor: 3,
    },
  ],
};

export default perfilVendedor;
