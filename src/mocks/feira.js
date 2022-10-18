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
import { vendedores } from "./vendedores";

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
    {
      id: 2,
      nome: "Carne1",
      preco: 2.0,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Pá",
      vendedor: 2,
    },
    {
      id: 3,
      nome: "Carne2",
      preco: 4.0,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Agulha",
      vendedor: 2,
    },
    {
      id: 4,
      nome: "Carne3",
      preco: 2.5,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Agulha",
      vendedor: 2,
    },
    {
      id: 5,
      nome: "Carne4",
      preco: 4.25,
      imagem: fotoProduto,
      descricao: "Descrição do produto",
      categoria: 0,
      filtro: "Picanha",
      vendedor: 2,
    },
  ],
};

export default feira;
