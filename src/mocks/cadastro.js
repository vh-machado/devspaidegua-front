import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-remix-icon';

import cores from '../assets/cores';

const cadastro = {
  botaoVoltar: 'Voltar',
  
  titulo: 'Cadastro',

  formulario: {
    titulo: 'Preencha com seus dados',
    textoErro: 'Campo inválido',
    campos: [
      {
        keyCampo: 'nome',
        label: 'Nome',
        icone: <AntDesign name="user" size={20} color={cores.spanishGray} />,
      },
      {
        keyCampo: 'email',
        label: 'E-mail',
        icone: (
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={cores.spanishGray}
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
            color={cores.spanishGray}
          />
        ),
      },
    ],
  },

  tipoUsuario: {
    titulo: 'Você é:',
    textoErro: 'Escolha uma das opções',
    botoes: [
      {
        titulo: 'Visitante',
        iconeDesativado: (
          <Icon name="user-search-fill" size="45" color={cores.spanishGray} />
        ),
        iconeAtivado: (
          <Icon name="user-search-fill" size="45" color={cores.celadonBlue} />
        ),
      },
      {
        titulo: 'Vendedor',
        iconeDesativado: (
          <Icon name="user-location-fill" size="45" color={cores.spanishGray} />
        ),
        iconeAtivado: (
          <Icon
            name="user-location-fill"
            size="45"
            color={cores.celadonBlue}
          />
        ),
      },
    ],
  },

  botaoConcluir: 'CRIAR CONTA',
  verificaUsuario: 'Já possui conta?',
  botaoLogin: 'LOGIN',
};

export default cadastro;