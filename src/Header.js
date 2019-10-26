import React, {Component} from "react"
import "./Header.css"
import logo from "./images/market-logo.png";

class Header extends Component{
    render() {
        
        return (
            <div className="col- top-image">
            <img className="logo" src={logo} alt="logo" />
            </div> 

        )
    }
}

export default Header;