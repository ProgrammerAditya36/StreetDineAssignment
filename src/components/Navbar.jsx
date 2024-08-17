import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Icon } from "@mui/material";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Dashboard",
            route: "/",
            icon: "dashboard",
        },
        {
            name: "Orders",
            route: "/orders",
            icon: "list_alt",
        },
        {
            name: "Create Order",
            route: "/create_order",
            icon: "add_circle",
        },
        {
            name: "Menu",
            route: "/menu",
            icon: "restaurant_menu",
        },
        {
            name: "Tables",
            route: "/tables",
            icon: "table",
        },
        {
            name: "Employees",
            route: "/employees",
            icon: "group",
        },
        {
            name: "Inventory",
            route: "/inventory",
            icon: "inventory_2",
        },
        {
            name: "Kitchen Orders",
            route: "/kitchen",
            icon: "kitchen",
        },
        {
            name: "Analytics",
            route: "/analytics",
            icon: "analytics",
        },
        {
            name: "Settings",
            route: "/settings",
            icon: "settings",
        },
    ];

    const handleNavigation = (route) => {
        navigate(route);
    };

    return (
        <div className="flex h-full flex-col items-center bg-light">
            <div className="h-[110px] w-[110px]">
                <img src={logo} className="w-full object-cover" alt="Logo" />
            </div>
            <div className="w-full px-7">
                <ul className="flex w-full flex-col gap-[10px]">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className={`nav-item flex w-full cursor-pointer items-center gap-[5px] ${
                                location.pathname === item.route
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => handleNavigation(item.route)}
                        >
                            <Icon baseClassName="material-symbols-outlined">
                                {item.icon}
                            </Icon>

                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
