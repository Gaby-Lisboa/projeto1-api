import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  const [id, setID] = useState('');
  const [filme, setFilme] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [classif, setClassif] = useState('');
  const [idioma, setIdioma] = useState('');

  const handleGet = async () => {
    try {
      const response = await axios.get(`https://example.com/filmes/${id}`);
      const data = response.data;
      setFilme(data.filme);
      setGenero(data.genero);
      setAno(data.ano);
      setClassif(data.classificacao);
      setIdioma(data.idioma);
    } catch (error) {
      console.error('Erro ao buscar o filme:', error);
    }
  };

  const handlePost = async () => {
    try {
      const response = await axios.post('https://example.com/filmes', {
        filme,
        genero,
        ano,
        classificacao: classif,
        idioma,
      });
      console.log('Filme adicionado:', response.data);
    } catch (error) {
      console.error('Erro ao adicionar o filme:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.stGet}>
        <Text style={styles.title}>GET</Text>
        <View style={styles.inputRow}>
          <Text>ID:</Text>
          <TextInput
            value={id}
            onChangeText={(e) => { setID(e) }}
            style={styles.caixaID}
          />

        </View>
        <Text style={styles.label}>Filme</Text>
        <Text style={styles.caixaGet}>{filme}</Text>
        <Text style={styles.label}>Gênero</Text>
        <Text style={styles.caixaGet}>{genero}</Text>
        <Text style={styles.label}>Ano</Text>
        <Text style={styles.caixaGet}>{ano}</Text>
        <Text style={styles.label}>Idioma</Text>
        <Text style={styles.caixaGet}>{idioma}</Text>
        <Text style={styles.label}>Classificação</Text>
        <Text style={styles.caixaGet}>{classif}</Text>
        <Pressable style={styles.btn} onPress={handleGet}>
            <Text style={styles.btnText}>GET</Text>
          </Pressable>
      </View>

      <View style={styles.stPost}>
        <Text style={styles.title}>POST</Text>
        
        <Text style={styles.label}>Filme</Text>
        <TextInput
          value={filme}
          onChangeText={(e) => { setFilme(e) }}
          style={styles.caixaPost}
        />
        
        <Text style={styles.label}>Gênero</Text>
        <TextInput
          value={genero}
          onChangeText={(e) => { setGenero(e) }}
          style={styles.caixaPost}
        />

        <Text style={styles.label}>Ano</Text>
        <TextInput
          value={ano}
          onChangeText={(e) => { setAno(e) }}
          style={styles.caixaPost}
        />

        <Text style={styles.label}>Idioma</Text>
        <TextInput
          value={idioma}
          onChangeText={(e) => { setIdioma(e) }}
          style={styles.caixaPost}
        />

        <Text style={styles.label}>Classificação</Text>
        <TextInput
          value={classif}
          onChangeText={(e) => { setClassif(e) }}
          style={styles.caixaPost}
        />
        <Pressable style={styles.btn} onPress={handlePost}>
          <Text style={styles.btnText}>POST</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  stGet: {
    backgroundColor: '#d1e7f3',
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  stPost: {
    backgroundColor: '#98c1d9',
    flex: 1,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2b2d42',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#2b2d42',
    fontWeight: 'bold',
  },
  caixaGet: {
    height: 35,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#a0c4ff',
    marginBottom: 10,
    color: '#2b2d42',
  },
  caixaPost: {
    height: 35,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2b2d42',
    color: '#2b2d42',
  },
  caixaID: {
    width: '30%',
    height: 35,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2b2d42',
    paddingLeft: 10,
    color: '#2b2d42',
  },
  btn: {
    height: 35,
    backgroundColor: '#136f63',
    marginLeft: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
