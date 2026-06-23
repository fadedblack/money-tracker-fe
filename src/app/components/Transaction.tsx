import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  transactionType: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    borderColor: "black",
    borderBottomWidth: 4
  },
  transactionBox: {
    padding: 10
  }
});

interface Params {
  value: number,
  type: string
}

const Transaction = ( {value, type} : Params) => {
  return (
    <View style={styles.transactionType}>
      <Text style={styles.transactionBox}>{type}</Text>
      <Text style={styles.transactionBox}>{value}</Text>
    </View>
  );
};

export default Transaction;
