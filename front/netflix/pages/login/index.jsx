import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (token) {
      AsyncStorage.setItem("token", token)
        .then(() => {
          console.log("Token salvo:", token);
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.error("Erro ao salvar o token", error);
        });
    }
  }, [token]);  

  const logar = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: user,
        password: password,
      });
      const token = response.data.access;
      setToken(token);
      console.log("Token recebido:", token);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.cardLogin}>
        <View style={styles.caixas}>
          <TextInput
            style={styles.caixa}
            placeholder="User"
            value={user}
            onChangeText={(e) => {
              setUser(e);
            }}
            aria-label="User"
          />
          <TextInput
            style={styles.caixa}
            placeholder="Password"
            value={password}
            onChangeText={(e) => {
              setPassword(e);
            }}
            secureTextEntry={true}
            aria-label="Password"
          />
          <Pressable style={styles.button} onPress={logar} role="button">
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
