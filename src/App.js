import React, { Component } from 'react';
import uuid from "uuid/v4";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Input from "./components/input/Input";
import ItemCount from "./components/itemCount/ItemCount";
import Item from "./components/item/Item";
import './App.css';

function date() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //As January is 0.
  let yyyy = today.getFullYear();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return (yyyy + "-" + mm + "-" + dd);
};

class App extends Component {
  state = {
    products: [
      {text: "Tomato", quantity: 2, bought: true, date: "2019-10-27", id: uuid()},
      {text: "Avocado",quantity: 3, bought: true, date: "2019-10-28", id: uuid()},
      {text: "Bread", quantity: 1, bought: false, date: "2019-10-30", id: uuid()},
      {text: "Water", quantity: 3,bought: false, date: "2019-10-29", id: uuid()},
      {text: "Beer", quantity: 6,bought: true, date: "2019-10-21", id: uuid()},
      {text: "Pizza", quantity: 1,bought: false, date: "2019-10-22", id: uuid()}

    ]
  }
  //This func should update the state with a new task
  addNewProduct = prodText =>{
    const productCopy = this.state.products.slice();
    const newProduct = {
      text: prodText,
      bought: false,
      date: date(),
      id: uuid()
    }
    productCopy.push(newProduct)
    this.setState({
      products: productCopy
    });
   }
  render() {

  const boughtProduct = this.state.products.filter(prod =>{return prod.bought}) 
  const pendingBuy = this.state.products.filter(prod => !prod.bought);
  
  
  return (
    <div className="container">
      <Header />
      <Title />
      <Input addNewProductFunc={this.addNewProduct} />
      <ItemCount count={pendingBuy.length} />
      {pendingBuy.map(prod => <Item text={prod.text} bought={prod.bought} quantity={prod.quantity} date={prod.date} key={prod.id} />
        )}

         <h5 className="title">You recently bought: </h5>
       
        {boughtProduct.map(prod => <Item text={prod.text} bought={prod.bought} key={prod.id} />
        )}
   
     
      
    </div>
  );
  }
}

export default App;
