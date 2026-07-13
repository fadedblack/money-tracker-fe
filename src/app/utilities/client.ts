import {EXPO_BASE_URL} from "@/app/constants/constant";

export const addTransaction = async (payload: string) => {
        return await fetch(EXPO_BASE_URL + "money-tracker/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload,
        });
}