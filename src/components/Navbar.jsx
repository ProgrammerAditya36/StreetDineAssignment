import React, { useContext } from "react";
import { Context } from "../context/Context";
const Navbar = () => {
    const { title, user } = useContext(Context);
    const options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    };
    const today = new Date().toLocaleDateString("en-GB", options);

    return (
        <div className="flex items-center justify-between">
            <h1 className="title">{title}</h1>
            <div className="flex items-center gap-9">
                <p className="text-lg font-semibold">{today}</p>
                <div className="flex items-center gap-2">
                    <img
                        src={user.imgUrl}
                        alt="user"
                        className="h-8 w-8 rounded-full"
                    />
                    <div className="flex flex-col justify-center text-center">
                        <p className="text-lg font-medium">{user.name}</p>
                        <p className="text-xs font-medium text-[#87449a]">
                            {user.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
