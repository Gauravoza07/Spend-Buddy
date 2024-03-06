import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function Layout()
{
    return(
        <>
            <div className="fixed w-full z-50"><Navbar/></div>
            <div className="p-16"><Outlet/></div>
            <div className="bottom-0 w-full"><Footer/></div>
        </>
    )
}