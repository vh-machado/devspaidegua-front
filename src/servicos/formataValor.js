export default function formataValor(valor) {
  let valorFormatado = valor;
  return `R$ ${valorFormatado.toFixed(2)}`.replace(".", ",");
}
