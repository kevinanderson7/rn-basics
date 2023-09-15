import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Some other Text</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Tap Me!"></Button>
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
  dummyText: {
    margin: 16,
    padding: 10,
    borderWidth: 2,
    borderColor: "green",
  },
});
