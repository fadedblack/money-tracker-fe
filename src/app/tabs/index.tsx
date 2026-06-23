import {View, Text, StyleSheet, Button} from "react-native";
import Transactions from "@/app/components/Transactions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
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
    <View>
      <Transactions></Transactions>
    </View>
  );
};

export default Index;
