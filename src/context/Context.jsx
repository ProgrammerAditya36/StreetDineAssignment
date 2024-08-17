import { createContext, useEffect, useState } from "react";
import userImg from "../assets/user.png";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Shruti Bisht",
        imgUrl: userImg,
        role: "Admin",
    });

    const [orders, setOrders] = useState([
        {
            table_name: "T2",
            type: "Dine In",
            id: 21,
            token: 7,
            items: [
                {
                    name: "Veg Pizza",
                    quantity: 1,
                    price: 350,
                },
                {
                    name: "Pasta",
                    quantity: 1,
                    price: 350,
                },
            ],
            amount: 700,
            remaining: 700,
            status: "Not Paid",
            instructions: "Add extra cheese",
        },
        {
            table_name: "T3",
            type: "Take Away",
            id: 22,
            token: 9,
            items: [
                {
                    name: "Veg Pizza",
                    quantity: 1,
                    price: 350,
                },
                {
                    name: "Coca Cola",
                    quantity: 1,
                    price: 80,
                },
            ],
            amount: 430,
            remaining: 430,
            status: "Not Paid",
            instructions: "Add extra cheese",
        },
        {
            table_name: "T3",
            type: "Dine In",
            id: 24,
            token: 10,
            items: [
                {
                    name: "Veg Pizza",
                    quantity: 1,
                    price: 350,
                },
                {
                    name: "Coca Cola",
                    quantity: 1,
                    price: 80,
                },
            ],
            amount: 430,
            remaining: 430,
            status: "Not Paid",
            instructions: "Add extra cheese",
        },
    ]);

    const [title, setTitle] = useState("Dashboard");
    return (
        <Context.Provider value={{ user, setUser, title, setTitle, orders }}>
            {children}
        </Context.Provider>
    );
};
