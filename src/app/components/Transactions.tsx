import {View, StyleSheet} from "react-native";
import Transaction from "@/app/components/Transaction";

const Transactions = () => {
    return (
        <View>
            <Transaction value = {20000} type = {"Home"}/>
            <Transaction value = {5000} type = {"Rent"} />
            <Transaction value = {100} type = {"Wifi"} />
            <Transaction value = {354} type = {"Medicine"} />
        </View>
    )
}

export default Transactions;