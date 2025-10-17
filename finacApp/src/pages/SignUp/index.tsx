import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type SignProps = Record<string, never>;

type SignStates = Record<string, never>;

export default class SignUp extends Component<SignProps, SignStates> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela Cadastro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
