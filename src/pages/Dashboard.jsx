import React, { useContext } from "react";
import { Context } from "../context/Context";
import FoodCard from "../components/FoodCard";
const Dashboard = () => {
    const { orders } = useContext(Context);
    return (
        <div className="grid gap-[25px] lg:grid-cols-3">
            {orders.map((order) => {
                return <FoodCard key={order.id} order={order} />;
            })}
        </div>
    );
};

export default Dashboard;
