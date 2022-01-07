// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import FormNavigator from "./navigation/FormNavigator";

function App() {
 
  return <FormNavigator />;
}

const styles = StyleSheet.create({
  textBox: {
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 25,
    marginTop: 40,
  },
});
export default App;
