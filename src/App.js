import React from "react";
import Info from "./Info";
import About from "./About";
import Interest from "./Interests";
import Footer from "./Footer";
import "./index.css";


export default function App() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}