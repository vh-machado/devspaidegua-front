import fotoProduto from "../assets/tucupi.jpg";
import categoriaCarnes from "../assets/icons/categorias/carnes.svg";
import categoriaFrutas from "../assets/icons/categorias/frutas.svg";
import categoriaVegetais from "../assets/icons/categorias/vegetais.svg";
import categoriaPeixes from "../assets/icons/categorias/peixes.svg";
import categoriaRefeicoes from "../assets/icons/categorias/refeicoes.svg";
import categoriaLanches from "../assets/icons/categorias/lanches.svg";
import categoriaBebidas from "../assets/icons/categorias/bebidas.svg";
import categoriaVestuario from "../assets/icons/categorias/vestuario.svg";
import cores from "../assets/cores";

const { filtros } = cores;

const feira = {
  textoBarraPesquisa: "Encontre produtos do Ver-o-Peso",
  tituloCategorias: "Categorias",
  categorias: [
    {
      id: 0,
      titulo: "Carnes",
      Icone: categoriaCarnes,
      filtros: [
        { titulo: "Pá", cor: filtros.bittersweet },
        { titulo: "Agulha", cor: filtros.bittersweet },
        { titulo: "Picadinho", cor: filtros.bittersweet },
        { titulo: "Picanha", cor: filtros.bittersweet },
      ],
    },
    {
      id: 1,
      titulo: "Frutas",
      Icone: categoriaFrutas,
      filtros: [
        { titulo: "Manga", cor: filtros.amber },
        { titulo: "Banana", cor: filtros.naplesYellow },
        { titulo: "Laranja", cor: filtros.sandyBrown },
      ],
    },
    { id: 2, titulo: "Vegetais", Icone: categoriaVegetais, filtros: [] },
    { id: 3, titulo: "Peixes", Icone: categoriaPeixes, filtros: [] },
    { id: 4, titulo: "Refeições", Icone: categoriaRefeicoes, filtros: [] },
    { id: 5, titulo: "Lanches", Icone: categoriaLanches, filtros: [] },
    { id: 6, titulo: "Bebidas", Icone: categoriaBebidas, filtros: [] },
    { id: 7, titulo: "Vestuario", Icone: categoriaVestuario, filtros: [] },
  ],
  tituloFiltros: "Filtros",
  tituloEncontrados: "Encontrados no Ver-o-Peso",
  produtos: [
    {
      id: 0,
      nome: "Fruta1",
      preco: "R$ 2,00",
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 1,
      filtro: "Manga",
    },
    {
      id: 1,
      nome: "Fruta2",
      preco: "R$ 2,00",
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 1,
      filtro: "Banana",
    },
    {
      id: 2,
      nome: "Carne1",
      preco: "R$ 2,00",
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Pá",
    },
    {
      id: 3,
      nome: "Carne2",
      preco: "R$ 2,00",
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Agulha",
    },
    {
      id: 4,
      nome: "Carne3",
      preco: "R$ 2,00",
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Agulha",
    },
    {
      id: 5,
      nome: "Carne4",
      preco: "R$ 2,00",
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Picanha",
    },
  ],
};

export default feira;
