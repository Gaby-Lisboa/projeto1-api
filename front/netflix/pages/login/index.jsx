import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    // const [,]=useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
      AsyncStorage.setItem('token', token)
        .then(
          ()=>{
              if (token != null){
                console.log('Token Salvo:', token)
              }

          }
        )
        .catch (
            (error)=>{
              console.error('Erro ao salvar token:', error) 
            }
        )
    })
    const logar = async () => {
      try {
        const response = await axios.post(
          'https://127.0.0.1:8000/api/token/',
          {
            username: user,
            password: password,
          }
        )
        console.log(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.caixa}
                value={user}
                onChangeText={(e) => setUser(e)}
                placeholder="User"
            />
            <TextInput
                style={styles.caixa}
                value={password}
                onChangeText={(e) => setPassword(e)}
                secureTextEntry={true}
                placeholder="Password"
            />
            <Pressable
                style={styles.btn}
                
            >
                <Text>OK</Text>
            </Pressable>


        </View>
    )
}