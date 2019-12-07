import React, { Component } from "react";
import "./style.css"


class Item extends Component {

    handleDelete = e => {
        console.log("button was clicked", e);
        this.props.deleteProductFunc(this.props.id)
    }
    handleBought = e => {
        this.props.boughtProductFunc(this.props.id)
    }

    render() {
        return (
            <div className="row d-flex justify-content-center text">
                <div className="col-1 arrow-align">
                    <p> <i className="fas fa-angle-right arrow"></i></p>
                </div>
                <div className={!this.props.bought ? "col-4 col-sm-2 d-flex align-self-center text-product-buy" : "d-none d-md-block"}>
                    <p>{!this.props.bought && this.props.text}</p>
                </div>
                <div className={this.props.bought ? "col-4 col-sm-2":"col-2 col-sm-2 d-flex justify-content-center"}>
                    <p> {this.props.bought ? this.props.text : `Qty: ${this.props.quantity}`}</p>
                </div>

                <div className={!this.props.bought ? "col-5 col-sm-2 d-flex align-self-center" : "d-none d-md-block"}>
                    <p> {!this.props.bought && `Buy: ${this.props.dueBy}`}</p>
                </div>

                {/* Small buttons */}
                <div className="d-flex justify-content-center">
                    <div className="col-6 show left">{!this.props.bought && (
                        <button type="button" className="buttons" onClick={this.handleBought}><i className="fas fa-check-circle check-icon"></i></button>)}
                    </div>
                    <div className={this.props.bought ? "col-12 show right" : "col-6 show"}>
                        <button type="button" className="buttons" onClick={this.handleDelete}><i className="fas fa-times-circle cruz-icon"></i></button>
                    </div>
                </div>
                {/* Big buttons */}
                <div className="col-2 d-none d-md-block">{!this.props.bought && (

                    <button type="button" className="done-button" onClick={this.handleBought}>Done </button>)}
                </div>
                <div className=" col-2 d-none d-md-block">
                    <button type="button" className="del-button" onClick={this.handleDelete}>Delete</button>
                </div>

            </div >


        );
    }
}

export default Item

