// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const FormScreen = (props) => {
  const [searchId, setSearchId] = useState("");

  const handleSearchInputChanges = (text) => {
    setSearchId(text);
  };

  const searchHandler = () => {
    axios
      .get(
        `http://www.neowsapp.com/rest/v1/neo/${searchId}?api_key=futtydpkZIgHUEcLKDNXfCul8nBrw6T2XDu8Y6tG`
      )
      .then((res) => {
        props.navigation.navigate("DetailsScreen", {
          name: res.data.name,
          nasa_jpl_url: res.data.nasa_jpl_url,
          potentially_hazardous_asteroid:
            res.data.is_potentially_hazardous_asteroid,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const idHandler = () => {
    axios
      .get(
        "http://www.neowsapp.com/rest/v1/neo/2000433?api_key=futtydpkZIgHUEcLKDNXfCul8nBrw6T2XDu8Y6tG"
      )
      .then((res) => {
        props.navigation.navigate("DetailsScreen", {
          name: res.data.name,
          nasa_jpl_url: res.data.nasa_jpl_url,
          potentially_hazardous_asteroid:
            res.data.is_potentially_hazardous_asteroid,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderElement = () => {
    if (searchId == "") {
      return;
    } else {
      return <Button onPress={searchHandler} title="Submit" />;
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Enter Asteroid ID"
        onChangeText={handleSearchInputChanges}
        value={searchId}
        style={styles.textBox}
      ></TextInput>

      {renderElement()}

      <Button title="Random Asteroid" onPress={idHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    borderColor: "skyblue",
    borderWidth: 2,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 25,
    marginTop: 50,
  },
});
export default FormScreen;
