import React, { Component } from "react";
//import moment from "moment";
import DatePicker from 'react-date-picker';
import NumericInput from 'react-numeric-input';


import "./Input.css"

//controlled Component

class Input extends Component {

  state = {

    newItemText: "",
    date: new Date(),
    qty: 0
   
  }
  //Functions that update states must always live where the state lives
  updateNewItemText = event => {
    // console.log(event.target.value);
    //This funciton should update the state when someone types something
    this.setState({
      newItemText: event.target.value
    });
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.props.addNewProductFunc(this.state.newItemText, this.state.date, this.state.qty);

      this.setState({
        newItemText: ""
        
      });
    }
  }
  handleClick = (event) => {
    event.preventDefault();
    this.props.addNewProductFunc(this.state.newItemText, this.state.date, this.state.qty);
    this.setState({
      newItemText: ""
      
    });
  }
  
  handleDateChange = date => {
    console.log(date)
    this.setState({date});
  }

  //STILL WORKING ON IT
  handleQuantity = (qty) => {
    console.log(qty)
    this.setState({qty});
    
   
  } 

  render() {
    return (
      <div className="input-group input">
        <div className="form-group mx-sm-3 mb-2 d-flex justify-content-center flex-wrap">

          <input

            className="form-control input-bar"
            type="text"
            placeholder="Product name"
            value={this.state.newItemText}
            onChange={this.updateNewItemText}
            onKeyPress={this.handleKeyPress}

          ></input>

         
           <NumericInput 
          className="form-control" 
          onChange={this.handleQuantity}
          value={this.state.qty}
         
          inputMode="numeric"
          mobile="auto"
          
          />
          
          

          
          <div className="calendar">
            <DatePicker
              onChange={this.handleDateChange}
              onKeyPress={this.handleKeyPress}
              value={this.state.date} 
              format="dd-MM-y"
              />
          </div>
          </div>



          <div className="button d-flex justify-content-center">
            <button type="button" className="buttons show" onClick={this.handleClick} disabled={this.state.newItemText.length === 0}><i className="fas fa-cart-plus add-icon"></i></button>
          </div>
          <div className="button d-none d-md-block">
            <button type="button" className="add-button" onClick={this.handleClick} disabled={this.state.newItemText.length === 0}>Add</button>
          </div>
        
      </div>


    );

  }
}



export default Input