import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {EXPO_BASE_URL} from "@/app/constants/constant";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        color: "#000000",
        fontSize: 18,
    },
});

const Add = () => {
    const [inputValue, setInputValue] = useState(0);
    const [expenseType, setExpenseType] = useState("");

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Expense Type</Text>
                <TextInput
                    style={styles.text}
                    placeholder={"Enter something..."}
                    value={expenseType}
                    onChangeText={(text) => setExpenseType(text)}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Expense Value</Text>
                <TextInput
                    style={styles.text}
                    placeholder={"Enter something..."}
                    value={inputValue.toString()}
                    onChangeText={(text) => setInputValue(Number(text))}
                />
            </View>

            <Button title={"Add Expense"}
                    onPress={async () => {
                        await fetch(EXPO_BASE_URL + "money-tracker/api/transactions", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                            type: "DEBIT",
                            category: expenseType,
                            amount: inputValue,
                            notes: "string"
                            }),
                        });

                        setInputValue(0);
                        setExpenseType("");
                    }}/>
        </View>
    );
};

export default Add;
