import React, { Component } from "react";
import "./style.css"


class Item extends Component {

    handleDelete = e =>{
        console.log("button was clicked", e);
        this.props.deleteProductFunc(this.props.id)
      }
    handleBought = e =>{
        this.props.boughtProductFunc(this.props.id)
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-6">
                    <table className="table table-sm table-borderless">
                        <tbody className="text">
                            <tr className="text-align">
                                <td><i className="fas fa-angle-right arrow">
                                </i></td>
                                <td> {!this.props.bought && this.props.text}</td>
                                <td>{this.props.bought ? this.props.text : `Qty: ${this.props.quantity}`}</td>
                                <td>{this.props.date}</td>
                                <td>{!this.props.bought && `Buy: ${this.props.dueBy}`}</td>
                               

                            </tr>
                        </tbody>
                        {/* <p id="prod-to-buy" className={this.props.bought ? "bought" : ''}>
                            <i className="fas fa-angle-right arrow">
                            </i> {this.props.text}</p> */}
                    </table>
                </div>

                {/* Small buttons */}
                <div className="col-6 show left">{!this.props.bought && (
                    <button type="button" className="buttons" onClick={this.handleBought}><i className="fas fa-check-circle check-icon"></i></button>)}
                </div>
                <div className={this.props.bought ? "col-1 show right" : "col-1 show"}>
                    <button type="button" className="buttons" onClick={this.handleDelete}><i className="fas fa-times-circle cruz-icon"></i></button>
                </div>
                {/* Big buttons */}
                <div className="col-3 b-left d-none d-md-block">{!this.props.bought && (

                    <button type="button" className="add-button" onClick={this.handleBought}>Done </button>)}
                </div>
                <div className=" col-3 b-rigth d-none d-md-block">
                    <button type="button" className="del-button" onClick={this.handleDelete}>Delete</button>
                </div>
                
            </div >




        );
    }
}

export default Item

