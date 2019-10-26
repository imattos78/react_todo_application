import React, {Component} from "react"
import "./style.css"

class Item extends Component {
    render() {
        return (
            
            <div className="row">
            <div className="col-12 col-md-6 text">
                <p id="prod-to-buy"className={this.props.bought ? "bought" : ''}>
                <i className="fas fa-angle-right arrow">
                 </i> {this.props.text} </p>
            </div>
                   {/* Small buttons */}
                <div className="col-6 show left">{!this.props.bought && (
                    <button type="button" className="buttons"><i className="fas fa-check-circle check-icon"></i></button>)} 
                </div> 
                <div className={this.props.bought ? "col-1 show right" : "col-1 show"}>
                    <button type="button" className="buttons"><i className="fas fa-times-circle cruz-icon"></i></button>
                </div>
                   {/* Big buttons */}
                <div className="col-3 b-left d-none d-md-block">{!this.props.bought && (

                    <button type="button" className="add-button">Done </button>)}
                </div>
                <div className=" col-3 b-rigth d-none d-md-block">
                    <button type="button" className="del-button">Delete</button>
                </div>
            </div>
        
       
    
       
        );
    }
}

export default Item

