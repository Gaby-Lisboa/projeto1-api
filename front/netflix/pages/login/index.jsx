import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from './styles';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text>Usuário:</Text>
        <TextInput
          style={styles.caixa}
          value={user}
          onChangeText={(e) => {setUser(e)}}
        />
      </View>
      <View style={{ marginTop: 20 }}> 
        <Text>Senha:</Text>
        <TextInput
          style={styles.caixa}
          value={password}
          onChangeText={(e) => {setPassword(e)}}
          secureTextEntry={true} 
        />
      </View>
      {}
    </View>
  );
}
