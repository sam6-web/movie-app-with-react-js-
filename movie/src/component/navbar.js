import React from "react";
import "./navbar.css"


function Navbar (){
    return(
        <div className="topnav">
        <a href="/">Home</a>
        <a href="/About">   favorits</a>
        <a href="/Contact">Contact</a>
        </div>
    );
}
export default Navbar;