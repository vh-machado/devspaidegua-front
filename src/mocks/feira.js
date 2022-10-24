import categoriaCarnes from "../assets/icons/categorias/carnes.svg";
import categoriaFrutas from "../assets/icons/categorias/frutas.svg";
import categoriaVegetais from "../assets/icons/categorias/vegetais.svg";
import categoriaPeixes from "../assets/icons/categorias/peixes.svg";
import categoriaRefeicoes from "../assets/icons/categorias/refeicoes.svg";
import categoriaLanches from "../assets/icons/categorias/lanches.svg";
import categoriaBebidas from "../assets/icons/categorias/bebidas.svg";
import categoriaVestuario from "../assets/icons/categorias/vestuario.svg";
import cores from "../assets/cores";
import { produtos } from "./produtos";

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
        { titulo: "Agulha", cor: filtros.bittersweet },
        { titulo: "Picadinho", cor: filtros.bittersweet },
        { titulo: "Picanha", cor: filtros.bittersweet },
        { titulo: "Costela", cor: filtros.bittersweet },
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
    { id: 3, titulo: "Peixes", Icone: categoriaPeixes, filtros: [
      {titulo: "Camarão", cor: filtros.sandyBrown}
    ] },
    { id: 4, titulo: "Refeições", Icone: categoriaRefeicoes, filtros: [
      {titulo: "Açaí", cor: filtros.lavanderFloral}
    ] },
    { id: 5, titulo: "Lanches", Icone: categoriaLanches, filtros: [] },
    { id: 6, titulo: "Bebidas", Icone: categoriaBebidas, filtros: [] },
    { id: 7, titulo: "Vestuario", Icone: categoriaVestuario, filtros: [] },
  ],
  tituloFiltros: "Filtros",
  tituloEncontrados: "Encontrados no Ver-o-Peso",
  produtos: [...produtos]
};

export default feira;
