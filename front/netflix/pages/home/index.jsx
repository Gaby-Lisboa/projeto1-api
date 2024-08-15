import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles';

export default function Home() {
  const [id, setID] = useState('');
  const [filmeG, setFilmeG] = useState('');
  const [generoG, setGeneroG] = useState('');
  const [anoG, setAnoG] = useState('');
  const [classifG, setClassifG] = useState('');
  const [idiomaG, setIdiomaG] = useState('');
  const [filme, setFilme] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [classif, setClassif] = useState('');
  const [idioma, setIdioma] = useState('');

  const capturar = async () => {
    try {
        const response = await axios.get(

        )
    } catch {

    }
  }

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

