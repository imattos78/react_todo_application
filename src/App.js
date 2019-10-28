import React, { Component } from 'react';
import uuid from "uuid/v4";
import Header from "./Header";
import Title from "./Title";
import Input from "./Input";
import ItemCount from "./ItemCount";
import Item from "./Item";

import './App.css';

class App extends Component {
  state = {
    products: [
      {text: "Tomato", quantity: 2, bought: true, date: "2019-10-21", id: uuid()},
      {text: "Avocado",quantity: 3, bought: true, date: "2019-10-21", id: uuid()},
      {text: "Bread", quantity: 1, bought: true, date: "2019-10-21", id: uuid()},
      {text: "Water", quantity: 3,bought: false, date: "2019-10-21", id: uuid()},
      {text: "Beer", quantity: 6,bought: true, date: "2019-10-21", id: uuid()},
      {text: "Pizza", quantity: 1,bought: false, date: "2019-10-21", id: uuid()}

    ]
  }
  //This func should update the state with a new task
  addNewProduct = prodText =>{
    const productCopy = this.state.products.slice();
    const newProduct = {
      text: prodText,
      bought: false,
      date: "2019-10-23",
      id: uuid()
    }
    productCopy.push(newProduct)
    this.setState({
      products: productCopy
    });
   }
  render() {

  const boughtProduct = this.state.products.filter(prod => prod.bought);
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
