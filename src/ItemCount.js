import React, {Component} from "react"
import "./ItemCount.css"

class ItemCount extends Component{
    render(){
        return (
            <div className="row d-none d-md-block">
            <div className="col intro-component">
                <h5>You have {this.props.count} products to buy in the list:</h5>
               
            </div>
        </div>
       

        );
    }
}

export default ItemCount;