import React from "react"
import "./style.css"

class ItemCount extends React.Component{
    render(){
        return (
            <div className="row d-none d-md-block">
            <div className="col intro-component">
                <p>You have {this.props.count} products to buy in the list:</p>
               
            </div>
        </div>
       

        );
    }
}

export default ItemCount;