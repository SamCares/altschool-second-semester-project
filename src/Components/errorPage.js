import React from "react";
import "./errorPage.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="errorMessage">
            <h1>Oops! This is not the web page you are looking for!</h1>

            <Link to="/">
                <button>Let's go back home</button>
            </Link>
        </div>
    );
};

export default PageNotFound;