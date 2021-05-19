import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [number, onChangeNumber] = React.useState(null);

  const [toggle, setToggle] = React.useState(false);

  const onPress = () => setToggle(!toggle);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Email"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.touch} onPress={onPress}>
        <Text style={styles.textTouch}>Login</Text>
      </TouchableOpacity>
      {toggle && (
        <Text style={{ alignSelf: "center", marginTop: 10 }}>
          Login success
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Cochin",
    fontSize: 20,
    marginBottom: 30,
  },
  touch: {
    alignItems: "center",
    backgroundColor: "green",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    width: 300,
  },
  textTouch: {
    color: "#fff",
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    width: 300,
    paddingLeft: 8,
  },
});
