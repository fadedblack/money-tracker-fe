import {View, Text, StyleSheet, Button} from "react-native";
import Transactions from "@/app/components/Transactions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

const Index = () => {
  return (
    <View style={styles.container}>
      <Transactions></Transactions>
    </View>
  );
};

export default Index;
