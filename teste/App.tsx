import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Component } from 'react';
import React from 'react';

// export default function App() {
//   return (
//     <View>
//       <Text>
//          Chocolate - MilkChoco
//       </Text>
//     </View>
//   );
// }

class App extends Component {
  render(){
    let nome = "Que tipo de doguinho é esse?"
    let url = 'url'

    return (
          <View style={{backgroundColor: "#DCC5B2"}}>
            <Text style={{color: "#B9375D", fontSize: 40}}>
               Chocolate - MilkChoco
            </Text>
            <Text>
              Choco - late
            </Text>
            <Text style={{color: "#B9375D", fontSize: 20}}>
              {nome}
            </Text>
            <Image source={{uri: url}}
            style={{width:200, height:200}}>
            </Image>
          </View>
        );
  }
}

export default App;