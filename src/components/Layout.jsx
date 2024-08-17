import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (
        <div className="flex h-screen w-full">
            <div className="w-1/4 max-w-[255px]">
                <Navbar />
            </div>
            <div className="bg-page h-screen flex-grow">{children}</div>
        </div>
    );
};

export default Layout;
