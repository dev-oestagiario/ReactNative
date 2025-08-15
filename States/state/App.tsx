import { Component } from "react";
import { Button, GestureResponderEvent, StyleSheet, Text, View } from "react-native";

type AppProps = {};

type AppState = {
  nome: string;
};

class App extends Component<AppProps, AppState> {
  state: AppState = { nome: "" };
  /*
  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: "Tados",
    };
    this.mudar = this.mudar.bind(this);
  }
  */

  mudar = (_event?: GestureResponderEvent) => {
    this.setState({
      nome: "Sua mãe n vem hoje",
    });
  };

  entrarComNome = (nome: string) => {
    this.setState({ nome });
  };

  render() {
    return (
      <View
        style={styles.root}
      >
        <View
          style={{
            marginTop: 20,
            width: "50%",
            height: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: "grey",
            gap: 10
          }}
        >
          <Button title="Mudar State" onPress={this.mudar}></Button>
          <Button title="Entra com nome" onPress={() =>{ this.entrarComNome('Minha pimba')}}></Button>
          <Text style={{ fontSize: 43, color: "white", textAlign: "center" }}>
            {this.state.nome}
          </Text>
        </View>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});



export default App;
