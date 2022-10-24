import cadastro from "../mocks/cadastro";
import inicio from "../mocks/inicio";
import mapa from "../mocks/mapa";
import feira from "../mocks/feira";
import perfilVendedor from "../mocks/perfilVendedor";
import user from "../mocks/user";
import login from "../mocks/login";

export const carregaLogin = () => {
  return login;
};

export const carregaCadastro = () => {
  return cadastro;
};

export const carregaInicio = () => {
  return inicio;
};

export const carregaMapa = () => {
  return mapa;
};

export const carregaFeira = () => {
  return feira;
};

export const carregaPerfilVendedor = () => {
  return perfilVendedor;
};

export const carregaUser = () => {
  return user;
}