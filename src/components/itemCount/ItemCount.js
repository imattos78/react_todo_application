// import React, {Component} from "react";
import React, { Component} from 'react';
import "./ItemCount.css";
import randomColor from 'randomcolor';




class ItemCount extends Component{
   
   

    render(){
        const colorRandom = randomColor();
        const numberstyle ={
            color: colorRandom,
            fontSize: "45px",
            border: "3px solid",
            
        };
        return (
            <div className="row d-none d-md-block">
            <div className="col intro-component">
                <h4><span style={numberstyle}>{this.props.count}</span> Products To Buy In The List:</h4>
               
            </div>
        </div>

        );
    }
}

export default ItemCount;