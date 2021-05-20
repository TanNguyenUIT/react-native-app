import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Stack = createStackNavigator();

function Home({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);

  const [toggle, setToggle] = React.useState(false);

  // const onPress = () => setToggle(!toggle);

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
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("MyTabs")}
      >
        <Text style={styles.textTouch}>Login</Text>
      </TouchableOpacity>
      {/* show/hide text */}
      {toggle && (
        <Text style={{ alignSelf: "center", marginTop: 10 }}>
          Login success
        </Text>
      )}
    </View>
  );
}

function mainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is main Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>this is home tab</Text>
    </View>
  );
}

function DevicesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>this is devices tab</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>this is setting tab</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Devices" component={DevicesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
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
