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
      {text: "Tomato", bought: true, date: "2019-10-21", id: uuid()},
      {text: "Avocado", bought: true, date: "2019-10-21", id: uuid()},
      {text: "Bread", bought: true, date: "2019-10-21", id: uuid()},
      {text: "Water", bought: false, date: "2019-10-21", id: uuid()},
      {text: "Beer", bought: true, date: "2019-10-21", id: uuid()},
      {text: "Pizza", bought: false, date: "2019-10-21", id: uuid()}

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
  const pendingBuy = this.state.products.filter(prod => !prod.bought)
  
  return (
    <div className="container">
      <Header />
      <Title />
      <Input addNewProductFunc={this.addNewProduct} />
      <ItemCount count={pendingBuy.length} />
      {pendingBuy.map(prod => <Item text={prod.text} bought={prod.bought} key={prod.id} />
        )}

         <h5 className="title">You recently bought: </h5>
       
        {boughtProduct.map(prod => <Item text={prod.text} bought={prod.bought} key={prod.id} />
        )}
   
     
      
    </div>
  );
  }
}

export default App;
