// import React, {Component} from "react";
import React, { Component} from 'react';
import "./ItemCount.css";
import randomColor from 'randomcolor';




class ItemCount extends Component{
    render(){
        const colorRandom = randomColor();
        const numberstyle ={
            color: colorRandom,
            fontSize: "32px",
            border: "5px solid",
            borderRadius: "50%",
            padding: "0.5% 1.5%",
            marginLeft: "30%" 
        };
        return (
            <div className="row d-none d-md-block">
            <div className="col intro-component">
                <h4><span style={numberstyle}>{this.props.count}</span> Products to buy from the list:</h4>
               
            </div>
        </div>

        );
    }
}

export default ItemCount;