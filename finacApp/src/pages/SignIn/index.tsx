import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type SignProps = Record<string, never>;

type SignStates = Record<string, never>;

export default class SignIn extends Component<SignProps, SignStates> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela Login</Text>
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
