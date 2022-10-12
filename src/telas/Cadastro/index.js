import React, { useState, useReducer } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { HelperText } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

import Texto from "../../components/Texto";
import Topo from "./components/Topo";
import CampoFormulario from "./components/CampoFormulario";
import BotaoTipoUsuario from "./components/BotaoTipoUsuario";
import Botao from "./components/Botao";
import cores from "../../assets/cores";

import useCadastro from "../../hooks/useCadastro";

export default function Cadastro() {
  const navigation = useNavigation();

  // Pega os dados do mock cadastro
  const {
    formulario,
    tipoUsuario,
    botaoConcluir,
    verificaUsuario,
    botaoLogin,
  } = useCadastro();

  // Controle dados inseridos nos campos
  const [dadosCampos, setDadosCampos] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [camposInvalidos, setCamposInvalidos] = useState({
    nome: false,
    email: false,
    senha: false,
  });

  const [usuarioNaoEscolhido, setUsuarioNaoEscolhido] = useState(false);

  // Controle da visibilidade da senha
  const [senhaOculta, setSenhaOculta] = useState(true);

  // Troca de botões de tipo de usuário
  const reducerBotaoUsuario = (botaoSelecionado, tipoUsuario) => {
    // Caso o botão pressionado já estava ativado, ele será desativado
    if (tipoUsuario === botaoSelecionado) {
      return null;
    } else {
      return tipoUsuario;
    }
  };

  // Controle do estado dos botões
  const [botaoSelecionado, trocaBotaoSelecionado] = useReducer(
    reducerBotaoUsuario,
    null
  );

  // Tratamento de campos vazios nos campos
  // Ativa o HelperText dos campos
  const identificaCamposVazios = () => {
    var keysCampo = Object.keys(dadosCampos);
    var atualizaCamposInvalidos = { ...camposInvalidos };
    let possuiErro = false;

    // Verifica se algum campo está vazio
    keysCampo.forEach((campo) => {
      if (dadosCampos[campo] === "") {
        atualizaCamposInvalidos[campo] = true;
        possuiErro = true;
      } else {
        atualizaCamposInvalidos[campo] = false;
      }

      // Um novo estado será criado se for diferente do atual
      if (atualizaCamposInvalidos[campo] !== camposInvalidos[campo]) {
        setCamposInvalidos(atualizaCamposInvalidos);
      }
    });

    return possuiErro;
  };

  // Tratamento de erro caso nenhuma opção de usuário foi selecionada
  // Ativa o HelperText de erro
  const identificaNenhumaEscolhaUsuario = () => {
    if (botaoSelecionado === null) {
      setUsuarioNaoEscolhido(true);
      return true;
    }

    return false;
  };

  // Funções onPress

  const onPressTipoUsuario = (tipoUsuario) => {
    // Função dispatch do useReducer
    trocaBotaoSelecionado(tipoUsuario);

    // Desativa o HelperText de erro quando um botão foi selecionado
    if (usuarioNaoEscolhido) {
      setUsuarioNaoEscolhido(false);
    }
  };

  const onPressEyeIcon = () => {
    setSenhaOculta(!senhaOculta);
  };

  const onPressBotao = (tipoBotao) => {
    // Caso seja o botão de cadastro será feito o
    // tratamento de erros e a persistência de dados
    if (tipoBotao === "cadastro") {
      if (!identificaCamposVazios() && !identificaNenhumaEscolhaUsuario()) {
        console.log("Salvar cadastro");
        console.log("Dados:");
        console.log(dadosCampos);
        console.log(botaoSelecionado);
        alert(
          `Dados salvos:\n${dadosCampos.nome}\n${dadosCampos.email}\n${dadosCampos.senha}\n${botaoSelecionado}`
        );
        navigation.navigate('AppRotas');
      }
    } else if (tipoBotao === "login") {
      console.log("voltar para inicio");
      alert("Voltar para início");
    }
  };

  // Evento onChange dos campos para guardar os dados
  const handleOnChangeDadosCampos = (novoTexto, campoAtual) => {
    var novosDados = { ...dadosCampos };
    novosDados[campoAtual] = novoTexto;
    setDadosCampos(novosDados);
  };

  // Seção de escolha de tipo de usuário
  const EscolhaUsuario = () => {
    return (
      <>
        <View style={estilos.containerTituloUsuario}>
          <Texto style={estilos.tituloTipoUsuario}>{tipoUsuario.titulo}</Texto>
          <HelperText
            style={estilos.textoErro}
            type="error"
            visible={usuarioNaoEscolhido}
          >
            <Texto>{tipoUsuario.textoErro}</Texto>
          </HelperText>
        </View>

        <View style={estilos.containerTipoUsuarios}>
          {tipoUsuario.botoes.map((botao) => {
            return (
              <BotaoTipoUsuario
                key={botao.titulo}
                {...botao}
                botaoSelecionado={botaoSelecionado}
                onPressTipoUsuario={onPressTipoUsuario}
              />
            );
          })}
        </View>
      </>
    );
  };

  return (
    <>
      <Topo />

      <View style={estilos.topoCard}>
        <Texto style={estilos.tituloFormulario}>{formulario.titulo}</Texto>
      </View>

      <FlatList
        style={estilos.flatlist}
        data={formulario.campos}
        renderItem={({ item }) => (
          <CampoFormulario
            {...item}
            onPressEyeIcon={item.keyCampo === "senha" ? onPressEyeIcon : null}
            senhaOculta={item.keyCampo === "senha" ? senhaOculta : null}
            handleOnChangeDadosCampos={handleOnChangeDadosCampos}
            camposInvalidos={camposInvalidos}
            setCamposInvalidos={setCamposInvalidos}
          />
        )}
        keyExtractor={({ keyCampo }) => keyCampo}
        ListFooterComponent={() => {
          return (
            <>
              <EscolhaUsuario />

              <Botao
                titulo={botaoConcluir}
                tipo={"cadastro"}
                onPressBotao={onPressBotao}
              />

              <View style={estilos.containerLinha}>
                <View style={estilos.linha} />
                <Texto style={estilos.verificaUsuario}>{verificaUsuario}</Texto>
                <View style={estilos.linha} />
              </View>

              <Botao
                titulo={botaoLogin}
                tipo={"login"}
                onPressBotao={onPressBotao}
              />
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  flatlist: {
    paddingHorizontal: 12,
    backgroundColor: cores.cultured,

  },

  topoCard: {
    height: 60,
    backgroundColor: cores.cultured,
    marginTop: -25,
    justifyContent: "center",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },

  tituloFormulario: {
    color: cores.onyx,
    position: "absolute",
    bottom: 0,
    marginHorizontal: 24,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 30,
  },

  containerTituloUsuario: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 5,
  },

  tituloTipoUsuario: {
    color: cores.onyx,
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 12,
  },

  containerTipoUsuarios: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 12,
  },

  textoErro: {
    fontSize: 10,
  },

  verificaUsuario: {
    fontSize: 12,
    fontWeight: "500",
    color: cores.spanishGray,
  },

  containerLinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 5,
  },

  linha: {
    width: "25%",
    height: 1,
    backgroundColor: cores.gainsboro,
  },
});
