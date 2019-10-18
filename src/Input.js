import React from "react";
import "./style.css"

class Input extends React.Component {
    render() {
        return (
            <div class="input-group">
                    <div class="custom-file input">

                        <input className="form-control input-bar" type="text" placeholder="Product name"></input>
                        <div className="button show">
                            <button type="button" className="buttons"><i className="fas fa-cart-plus add-icon"></i></button>
                        </div>
                        <div className="button d-none d-md-block">
                            <button type="button" className="add-button">Add</button>
                        </div>
                    </div>

                </div>
        );

    }
}



export default Input