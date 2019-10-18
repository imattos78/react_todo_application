import React from "react"
import "./Header.css"
import logo from "./market-logo.png";

class Header extends React.Component{
    render() {
        
        return (
            <div className="col-12 top-image">
            <img className="logo" src={logo} alt="logo"></img>
             </div> 

        )
    }
}

export default Header;