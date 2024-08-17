import React from "react";
const FoodCard = ({ order }) => {
    // table_name: "T2",
    //         type: "Dine In",
    //         id: 21,
    //         token: 7,
    //         items: [
    //             {
    //                 name: "Veg Pizza",
    //                 quantity: 1,
    //                 price: 350,
    //             },
    //             {
    //                 name: "Pasta",
    //                 quantity: 1,
    //                 price: 350,
    //             },
    //         ],
    //         amount: 700,
    //         remaining: 700,
    //         status: "Not Paid",
    //         instructions: "Add extra cheese",
    return (
        <div className="h-[531px] w-full rounded-[15px] bg-light p-5">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#ffd700] text-[26px] font-semibold">
                            {order.table_name}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[20px] font-medium">
                                Token -{order.token}
                            </p>
                            <p className="text-[16px] font-medium">
                                Order #{order.id}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        {order.type === "Dine In" && (
                            <p className="flex h-[23px] w-[82px] items-center justify-center rounded-[6px] bg-[#3772f080] px-4 text-[12px] font-bold">
                                {order.type}
                            </p>
                        )}
                        {order.type === "Take Away" && (
                            <p className="flex h-[23px] w-[82px] items-center justify-center rounded-[6px] bg-[#ffd70033] text-[12px] font-bold">
                                {order.type}
                            </p>
                        )}
                        <span className="flex items-center justify-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                            <span>{order.status}</span>
                        </span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="font-medium">Instructions</p>
                    <p className="font-medium text-[#3772f0]">
                        {order.instructions}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
