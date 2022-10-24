import { MaterialIcons } from '@expo/vector-icons';

import cores from '../assets/cores';

const login = {  
  formulario: {
    titulo: 'Entre na sua conta',
    textoErro: 'Campo inválido',
    campos: [
      {
        keyCampo: 'email',
        label: 'E-mail',
        icone: (
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={"white"}
          />
        ),
      },
      {
        keyCampo: 'senha',
        label: 'Senha',
        icone: (
          <MaterialIcons
            name="lock-outline"
            size={20}
            color={"white"}
          />
        ),
      },
    ],
  },


  botaoEntrar: 'ENTRAR',
  verificaUsuario: 'Não possui conta?',
  botaoCadastrar: 'CRIAR CONTA',
};

export default login;