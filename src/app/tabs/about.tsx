import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the About Screen</Text>
    </View>
  );
};

export default AboutScreen;
