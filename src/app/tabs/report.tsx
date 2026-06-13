import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Report Screen</Text>
    </View>
  );
};

export default Report;
