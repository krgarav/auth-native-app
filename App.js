import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TextComp from "./component/Login";

export default function App() {
  return (
    <View style={styles.container}>


      <SafeAreaView style={styles.area}>
        {/* <Text style={styles.text}>Login!</Text> */}
        <TextComp />
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
        title="Log in"
        color="purple"
        onPress={() => alert("Button Clicked")}
      />
      <Text></Text>
      <Button
        title="Create new Account"
        color="blue"
        onPress={() => alert("Button Clicked")}
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


  }
});
