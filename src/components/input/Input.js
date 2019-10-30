import React, { Component } from "react";
import "./Input.css"


    
//controlled Component

class Input extends Component {
  state = {
    newItemText: ""
  }
  //Functions that update states must always live where the state lives
  updateNewItemText = event => {
    console.log(event.target.value);
    //This funciton should update the state when someone types something
    this.setState({
      newItemText: event.target.value
    });
  }
  handleClick = (event) => {
    event.preventDefault();
    this.props.addNewProductFunc(this.state.newItemText);
    this.setState({
      newItemText: ""
    });
  }
  handleKeyPress = (event) => {
    if(event.charCode  === 13){
      this.props.addNewProductFunc(this.state.newItemText);
      this.setState({
        newItemText: ""
      });
    }
  }

  
  render() {
    return (
      <div className="input-group">
        <div className="custom-file input">

          <input

            className="form-control input-bar"
            type="text"
            placeholder="Product name"
            value={this.state.newItemText}
            onChange={this.updateNewItemText}
            onKeyPress={this.handleKeyPress}

          ></input>

          <div className="button show">
            <button type="button" className="buttons" onClick={this.handleClick}  disabled={this.state.newItemText.length === 0}><i className="fas fa-cart-plus add-icon"></i></button>
          </div>
          <div className="button d-none d-md-block">
            <button type="button" className="add-button" onClick={this.handleClick} disabled={this.state.newItemText.length === 0}>Add</button>
          </div>
        </div>

      </div>
    );

  }
}



export default Input