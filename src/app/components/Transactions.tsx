import {FlatList, View, ActivityIndicator} from "react-native";
import Transaction from "@/app/components/Transaction";
import {useCallback, useEffect, useState} from "react";
import {TransactionsDTO} from "@/app/types/types";
import {useFocusEffect} from "expo-router";

const Transactions = () => {
    const [transactions, setTransactions] = useState<TransactionsDTO | null>([]);
    const [isLoading, setIsLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            const fetchTransactions = async () => {
                try {
                    const response = await fetch("http://10.0.2.2:8080/money-tracker/api/transactions");
                    const data = await response.json();

                    setTransactions(data);
                } catch (error) {
                    console.error("Failed to fetch transactions:", error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchTransactions();
        },[])
    )

    if (isLoading) {
        return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
    }

    console.log(transactions);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={transactions}
                renderItem={({ item }) => (
                    <Transaction value={item.amount} type={item.category} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Transactions;