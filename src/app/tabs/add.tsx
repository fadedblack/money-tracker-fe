import {Button,StyleSheet, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {EXPO_BASE_URL} from "@/app/constants/constant";
import {SelectList} from "react-native-dropdown-select-list";
import {addTransaction} from "@/app/utilities/client";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        height:110,
        padding:10
        // width:400
    },
    text: {
        color: "#000000",
        fontSize: 18,
    },
});

const Add = () => {
    const [inputValue, setInputValue] = useState(0);
    const [selectedValue, setSelectedValue] = useState("");
    const [categories, setCategories] = useState([]);
    const [dropdownKey, setDropdownKey] = useState<number>(0);

    const handleReset = () => {
        setInputValue(0);
        setSelectedValue("");
        setDropdownKey(prevKey => prevKey + 1)
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchCategories = await fetch(EXPO_BASE_URL + "money-tracker/api/transactions/categories");
                return await fetchCategories.json();
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories().then((categories) => {
            const updates = categories.map((value:string, index:number) => {
                return {key: index, value};
            })
            setCategories(updates);
        });
    }, []);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Expense Type</Text>
                <SelectList
                    key={dropdownKey}
                    setSelected={(val: string) => setSelectedValue(val)}
                    data = {categories}
                    save = "value"
                    placeholder="Select an option"
                    maxHeight={80}
                    searchPlaceholder="Enter your Category"
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
                        await addTransaction(JSON.stringify({
                            type: "DEBIT",
                            category: selectedValue,
                            amount: inputValue,
                            notes: "string"
                        }));
                        handleReset();
                    }}/>
        </View>
    );
};

export default Add;
