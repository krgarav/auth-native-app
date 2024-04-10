import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [authState, setAuthState] = useState(false);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.area}>
        <Text style={styles.text}>{authState ? "Sign up" : "Login"}</Text>

        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
          placeholder="Enter your email"
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter your password"
          keyboardType="numeric"
        />
      </SafeAreaView>
      <Button
        style={styles.btn}
        title={authState ? "Sign up" : "Login"}
        color="purple"
        onPress={() => {}}
      />
      <Text></Text>
      <Button
        style={styles.btn}
        title={authState ? "Already have account , Login" : "Create new Account"}
        color="blue"
        onPress={() => {
          setAuthState((prev) => !prev);
        }}
      />

      {/* </ImageBackground> */}
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
  background: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    // opacity: 0.5,
  },
  text: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  area: {
    width: "80%",
  },
});
