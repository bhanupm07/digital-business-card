import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

function Final() {
    return ( 
        <div className="container">
            <App />;
        </div>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Final />)