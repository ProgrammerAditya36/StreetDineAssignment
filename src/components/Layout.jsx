import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (
        <div className="flex h-screen w-full">
            <div className="w-1/4 max-w-[255px]">
                <Sidebar />
            </div>
            <div className="flex h-screen flex-grow flex-col bg-page p-[60px]">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
