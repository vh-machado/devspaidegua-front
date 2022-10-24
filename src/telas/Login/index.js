import React, { useState } from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HelperText } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Texto from "../../components/Texto";
import cores from "../../assets/cores";
import CampoFormulario from "./components/CampoFormulario";
import useLogin from "../../hooks/useLogin";
import FundoTopo from "../../assets/headers/header-login.svg";
import BotaoAnimado from "../../components/BotaoAnimado";

const width = Dimensions.get("screen").width;
const heightTopo = (326 / 360) * width;

export default function Login() {
  const navigation = useNavigation();

  // Pega os dados do mock cadastro
  const { formulario, botaoEntrar, botaoCadastrar, verificaUsuario } =
    useLogin();

  // Controle dados inseridos nos campos
  const [dadosCampos, setDadosCampos] = useState({
    email: "",
    senha: "",
  });

  const [camposInvalidos, setCamposInvalidos] = useState({
    email: false,
    senha: false,
  });

  // Controle da visibilidade da senha
  const [senhaOculta, setSenhaOculta] = useState(true);

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

  const onPressEyeIcon = () => {
    setSenhaOculta(!senhaOculta);
  };

  const aoPressionarCadastrar = () => {
    navigation.navigate("Cadastro");
  };

  const aoPressionarEntrar = () => {
    if (!identificaCamposVazios()) {
      console.log("Salvar dados");
      navigation.navigate("AppRotas");
    }
  };

  // Evento onChange dos campos para guardar os dados
  const handleOnChangeDadosCampos = (novoTexto, campoAtual) => {
    var novosDados = { ...dadosCampos };
    novosDados[campoAtual] = novoTexto;
    setDadosCampos(novosDados);
  };

  return (
    <View style={estilos.fundo}>
      <View style={estilos.topo}>
        <FundoTopo style={{ position: "absolute" }} />
      </View>
      <FlatList
        style={estilos.flatlist}
        data={formulario?.campos}
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
        ListHeaderComponentStyle={estilos.headerFlatlist}
        ListHeaderComponent={() => {
          return (
            <Texto style={estilos.tituloFormulario}>{formulario?.titulo}</Texto>
          );
        }}
        ListFooterComponent={() => {
          return (
            <>
              <BotaoAnimado
                estilo={[
                  estilos.botao,
                  { backgroundColor: cores.persianGreen },
                ]}
                onPress={aoPressionarEntrar}
              >
                <Texto style={estilos.tituloBotao}>{botaoEntrar}</Texto>
              </BotaoAnimado>

              <View style={estilos.containerLinha}>
                <View style={estilos.linha} />
                <Texto style={estilos.verificaUsuario}>{verificaUsuario}</Texto>
                <View style={estilos.linha} />
              </View>

              <BotaoAnimado
                estilo={estilos.botao}
                onPress={aoPressionarCadastrar}
              >
                <Texto style={estilos.tituloBotao}>{botaoCadastrar}</Texto>
              </BotaoAnimado>
            </>
          );
        }}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: cores.blueSapphire,
  },

  topo: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: heightTopo,
  },

  flatlist: {
    paddingTop: heightTopo - 80,
    paddingHorizontal: 12,
  },

  headerFlatlist: {
    paddingVertical: 20,
  },

  tituloFormulario: {
    color: "white",
    position: "absolute",
    bottom: 0,
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 30,
  },

  textoErro: {
    fontSize: 10,
  },

  verificaUsuario: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
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

  botao: {
    height: 56,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cores.spanishGray,
    marginVertical: 20,
    marginHorizontal: 12,
    shadowColor: "black",
    //iOS
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    //Android
    elevation: 3,
  },

  tituloBotao: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
});
