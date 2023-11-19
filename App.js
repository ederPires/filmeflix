import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  //é chamdo quando o usuário abrir a tela
  useEffect(() => {
    async function loadFilmes(){
      //armazena a resposta
      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data);
      setFilmes(response.data);
      setLoading(false); //após carregar os filmes
    }

    loadFilmes();
  }, [])

  if(loading){
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center', flex:1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    )
  } else {
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

}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
