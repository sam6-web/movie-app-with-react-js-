import React from "react";
import "./navbar.css"


function Navbar (){
    return(
    <div className="nav">
        <div className="topnav">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3qIWGshDpld68BDvQVrXoqKqMlF5bCtJ9w0lajuGKZpW4Woe1&usqp=CAU"></img>
            <a href="/">Home</a>
            <a href="/Movies">  Movies</a>
            <a href="/Favorit">Favorit</a> 
        </div>
        <div className="topnav">
        <a href="/Signin">Signin</a>
        <a href="/Signup">Signup</a>
        </div>
    </div>
    );
}
export default Navbar;