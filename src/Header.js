import { Link } from "react-router-dom";
import React from "react";

function Header(){
    return(
        <header id="main-header">
                <div className="header-content">
                    <Link to="/"> Home </Link> 
                    <Link to="/content"> Content </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/login"> login </Link>
                <div class="dot"></div>
                </div>
        </header>
    );
}

export default Header;