import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View  style={styles.modalContainer}>

        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar} >
          <Text style={{color: '#FFF', fontSize: 16}}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse: </Text>
        <Text style={styles.descricao}>{props.filme.sinopse}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    //width: '90%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  btnVoltar:{
    backgroundColor: '#E52246',
    padding: 10,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    //Coloca botão em baixo
    position: 'absolute',
    bottom: 5,
    width: '100%', // ajuste a largura
    height: 50, // ajuste da altura
    alignItems: 'center' //alinha texto ao centro
  },
  titulo: {
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
  },
  sinopse: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 18,
    marginLeft: 10
  },
  descricao: {
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
  },
})
