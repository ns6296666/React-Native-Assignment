import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import React from "react";

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        Data Details
      </Text>
      <Text style={styles.information}>
        Name: {JSON.stringify(navigation.getParam("name", "NO-ID"))}
      </Text>
      <Text style={styles.information}>
        URL: {JSON.stringify(navigation.getParam("nasa_jpl_url", "NO-ID"))}
      </Text>
      <Text style={styles.information}>
        Potentially_Hazardous_Asteroid:{" "}
        {JSON.stringify(
          navigation.getParam("potentially_hazardous_asteroid", "NO-ID")
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  information: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 25,
    marginTop: 50,
  },
});
export default DetailsScreen;
