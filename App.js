import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component 
{
  constructor (){
    //yaşam dögülerinde önem sırası 1. sırada
    super();
    this.state = {
      text :'',
    }
    console.log("Constructer Çalişti")
  }

  componentDidMount(){
     //yaşam dögülerinde önem sırası 3. sırada
    console.log("componenet did mount çalişti")
  }

  componentDidUpdate(prevProps,prevState,snapShot){
    //yaşam dögülerinde sadece performansı iyileştirmek için state kontrol metodları
    if (this.state.text =! prevState.text) {
      alert("veriler Güncelleniyor")
    }
  }

  shouldComponentUpdate(nextProps,nextState,nextContext){
     //yaşam dögülerinde sadece performansı iyileştirmek için state kontrol metodları
    if (this.state.text =! nextState.text) {
      return true;
    }
    else{
      console.log("Gelen Veriler Ayni Güncelleme")
      return false ;
    }
  }
  
  componentWillUnmount(){
     //yaşam dögülerinde önem sırası 1. sırada
        return true;
  }
  render (){
     //yaşam dögülerinde önem sırası 2. sırada
    console.log ('render çalişti')
    return(
      <View style={{marginTop:50}} >
        <TouchableOpacity onPress={() => this.setState({text:'a'})}>
          <Text>
            değiştir
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}