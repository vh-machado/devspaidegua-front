import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

import Texto from '../../../components/Texto';
import cores from '../../../assets/cores';

import useLogin from '../../../hooks/useLogin';

export default function CampoFormulario({
  keyCampo,
  label,
  icone,
  onPressEyeIcon,
  senhaOculta,
  handleOnChangeDadosCampos,
  camposInvalidos,
  setCamposInvalidos,
}) {
  
  // Controle dos estados do texto digitado no campo
  const [texto, setTexto] = useState('');

  // Recebe o texto de erro do mock cadastro
  const { formulario } = useLogin();
  let textoErro;
  if (formulario) {
    textoErro = formulario.textoErro;
  }

  // Identifica campos vazios quando ocorre
  // o onBlur (usuário sai do TextInput) ou onChange (mudança de texto)
  // Ativa/Desativa o HelperText dos campos
  const identificaCampoVazio = (novoTexto) => {
    var atualizaCampoInvalido = { ...camposInvalidos };

    // Verifica se o campo específico está vazio
    if (novoTexto === '') {
      atualizaCampoInvalido[keyCampo] = true;
    } else {
      atualizaCampoInvalido[keyCampo] = false;
    }

    // Um novo estado será criado se for diferente do atual
    if (atualizaCampoInvalido[keyCampo] !== camposInvalidos[keyCampo]) {
      setCamposInvalidos(atualizaCampoInvalido);
    }
  };

  // Lida com a alteração dos inputs
  const handleOnChangeTexto = (novoTexto) => {
    setTexto(novoTexto);
    handleOnChangeDadosCampos(novoTexto, keyCampo);
    identificaCampoVazio(novoTexto);
  };

  return (
    <>
      <TextInput
        style={estilos.inputForm}
        label={<Texto style={estilos.label}>{`   ${label}  `}</Texto>}
        mode="outlined"
        secureTextEntry={keyCampo === 'senha' ? senhaOculta : false}
        error={camposInvalidos[keyCampo]}
        value={texto}
        onBlur={() => identificaCampoVazio(texto)}
        onChangeText={(texto) => handleOnChangeTexto(texto)}
        outlineColor={"white"}
        theme={{
          roundness: 15,
          colors: {
            primary: "white",
            text: "white",
            background: "transparent",
            error: cores.yellowOrange
          },
        }}
        left={<TextInput.Icon name={() => icone} />}
        right={
          keyCampo === 'senha' ? (
            <TextInput.Icon
              style={estilos.icone}
              name={senhaOculta ? 'eye-off' : 'eye'}
              color={"white"}
              onPress={onPressEyeIcon}
            />
          ) : null
        }
      />

      <HelperText
        style={estilos.textoErro}
        type="error"
        visible={camposInvalidos[keyCampo]}>
        <Texto>{textoErro}</Texto>
      </HelperText>
    </>
  );
}

const estilos = StyleSheet.create({
  inputForm: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 12,
    marginBottom: 10,
  },
  label: {
    color: "white",
    backgroundColor: cores.blueSapphire,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20,
  },
  icone: {
    marginEnd: 15,
  },
  textoErro: {
    color: cores.yellowOrange,
    fontWeight: "800",
    fontSize: 10,
    marginTop: -10,
    paddingHorizontal: 24,
  },
});
