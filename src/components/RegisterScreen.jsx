import Checkbox from "expo-checkbox";
import { useState, useEffect } from "react";
import {
  View,
  Button,
  TextInput,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  Keyboard,
  Linking,
  ScrollView,
} from "react-native";
import { Paragraph } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import styles from "../utils/globals";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Senhac, setSenhac] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data_nasc, setData_nasc] = useState("");

  const [checkis, setCheckis] = useState(false);

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));

  function handleRegister() {
    if (
      email !== "" &&
      senha !== "" &&
      nome !== "" &&
      Senhac !== "" &&
      cpf !== "" &&
      telefone !== "" &&
      data_nasc !== ""
    ) {
      if (senha !== Senhac) {
        console.log("Senha não confere");
        return;
      }

      if (checkis === false) {
        setTimeout(() => {
          createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
              console.log("Responsavel criado com sucesso!");
              const docRef = addDoc(collection(db, "cadresponsavel"), {
                cpf_resp: cpf,
                data_nasc: data_nasc,
                email_resp: email,
                nome_resp: nome,
                telefone_resp: telefone,
                senha_resp: senha,
                uid: userCredential.user.uid,
              }).then((docRef) => {
                console.log("Responsavel cadastrado com sucesso", docRef.id);
              });
            })
            .catch((error) => {
              console.log("Erro ao criar usuário!", error);
            });
        }, 4000);
      } else {
        setTimeout(() => {
          createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
              console.log("Idoso criado com sucesso!");
              const docRef = addDoc(collection(db, "cadidoso"), {
                cpf_idoso: cpf,
                data_nasc_idoso: data_nasc,
                email_idoso: email,
                nome_idoso: nome,
                telefone_idoso: telefone,
                senha_idoso: senha,
                uid: userCredential.user.uid,
              }).then((docRef) => {
                console.log("Idoso cadastrado com sucesso", docRef.id);
              });
            })
            .catch((error) => {
              console.log("Erro ao criar Idoso!", error);
            });
        }, 4000);
      }
    } else {
      console.log("Preencha todas as informções");
      return;
    }
  }

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 222,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100,
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        horizontal={false}
        style={{
          alignSelf: "stretch",
          flex: 1,
        }}
      >
        <View
          style={styles.logo}
        >
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y,
              transform: [{ translateY: offset.y }],
              alignItems: "center",
              justifyContent: "center",
            }}
            source={require("../files/images/logo.png")}
          />
        </View>

        <Animated.View
          style={[
            styles.content,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            onChangeText={(e) => setNome(e)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={(e) => setEmail(e)}
          />

          <TextInput
            style={styles.input}
            placeholder="CPF"
            autoCorrect={false}
            onChangeText={(e) => setCpf(e)}
          />

          <TextInput
            style={styles.input}
            placeholder="data de nascimento"
            autoCorrect={false}
            onChangeText={(e) => setData_nasc(e)}
          />

          <TextInput
            style={styles.input}
            placeholder="telefone do responsável"
            autoCorrect={false}
            onChangeText={(e) => setTelefone(e)}
          />

          <TextInput
            style={styles.input}
            placeholder="senha"
            autoCorrect={false}
            onChangeText={(e) => setSenha(e)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            autoCorrect={false}
            onChangeText={(e) => setSenhac(e)}
          />

          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={checkis}
              onValueChange={setCheckis}
              color={checkis ? "rgb(53, 153, 204)" : undefined}
            />
            <Text style={styles.paragraph}>
              Cadastrar como paciente (idoso)?
            </Text>
          </View>

          <TouchableOpacity onPress={handleRegister} style={styles.btnSubmit}>
            <Text style={styles.sumitText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCreate}>
            <Text style={styles.createText}>
              Já tem uma conta?
              <Text
                style={styles.hyperlinkStyle}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                Clique Aqui
              </Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
