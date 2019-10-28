import React, { Component } from "react"
import "./style.css"

class Item extends Component {
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
                                <td>{this.props.bought ? this.props.text : this.props.quantity}</td>
                                <td>{this.props.date}</td>

                            </tr>
                        </tbody>
                        {/* <p id="prod-to-buy" className={this.props.bought ? "bought" : ''}>
                            <i className="fas fa-angle-right arrow">
                            </i> {this.props.text}</p> */}
                    </table>
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
            </div >




        );
    }
}

export default Item

