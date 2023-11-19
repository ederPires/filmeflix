import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  //é chamdo quando o usuário abrir a tela
  useEffect(() => {
    async function loadFilmes(){
      //armazena a resposta
      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data);
      setFilmes(response.data);
    }

    loadFilmes();
  }, [])

  return (
    <View style={styles.container}>
      <Text>FILMES</Text>
      <FlatList
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Filmes data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
