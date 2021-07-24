import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>Arquitectura</Link>
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link mr-3 btn btn-dark"
                              to={"/list"}>List📃 </Link>
                        <Link className="nav-item nav-link mr-3 btn btn-dark"
                              to={"/"}>Home🕋 </Link>
                    </div>
            </div>
        </nav>
    )
}

export default Header;