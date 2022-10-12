import { useState, useEffect } from 'react';

import { carregaCadastro } from '../servicos/carregaDados';

export default function useCadastro() {

  const [cadastro, setCadastro] = useState({
    botaoVoltar: '',
    titulo: '',
    formulario: {
      titulo: '',
      textoErro: '',
      campos: [{ keyCampo: '', label: '', icone: null }],
    },
    tipoUsuario: {
      titulo: '',
      textoErro: '',
      botoes: [
        {
          titulo: '',
          iconeDesativado: null,
          iconeAtivado: null,
        },
      ],
    },
    botaoConcluir: '',
    verificaUsuario: '',
    botaoLogin: '',
  });

  useEffect(() => {
    const retorno = carregaCadastro();
    setCadastro(retorno);
  }, []);

  return cadastro;
}
