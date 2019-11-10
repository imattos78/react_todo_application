import React, { Component } from 'react';
import uuid from "uuid/v4";
import moment from "moment";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Input from "./components/input/Input";
import ItemCount from "./components/itemCount/ItemCount";
import Item from "./components/item/Item";



import './App.css';


class App extends Component {
  state = {
    products: [
      { text: "Tomato", quantity: 2, bought: true, date: "2019-10-27", id: uuid(), dueBy: "2019-11-30" },
      { text: "Avocado", quantity: 3, bought: true, date: "2019-10-28", id: uuid(), dueBy: "28-12-2019" },
      { text: "Bread", quantity: 1, bought: false, date: "2019-11-03", id: uuid(), dueBy: "01-12-2019" },
      { text: "Water", quantity: 3, bought: false, date: "2019-10-29", id: uuid(), dueBy: "08-12-2019" },
      { text: "Beer", quantity: 6, bought: true, date: "2019-10-21", id: uuid(), dueBy: "20-12-2019" },
      { text: "Pizza", quantity: 1, bought: false, date: "2019-10-22", id: uuid(), dueBy: "21-12-2019" }

    ]
  }
  //This func should update the state with a new task
  addNewProduct = (prodText, dueByDate, qty) => {
    const productCopy = this.state.products.slice();
    const newProduct = {
      text: prodText,
      bought: false,
      date: moment().format("YYYY-MM-DD"),
      id: uuid(),
      dueBy: moment(dueByDate).format("DD-MM-YYYY"),
      quantity: qty
    }

    productCopy.push(newProduct)
    this.setState({
      products: productCopy
    });
  };

  //Remove the product with th ID in question from this.state.products   
  deleteProduct = id => {
    console.log(id)

    //filter to remove the product that we want to delete
    const filteredProduct = this.state.products.filter((product) => product.id !== id)
    console.log(filteredProduct)

    //setState
    this.setState({
      products: filteredProduct
    });
  };

  boughtProduct = id => {
    console.log("This id is " + id);
    const updatedProduct = this.state.products.map(product => {
      if (product.id === id) {
        product.bought = true;
      }
      return product;
    });
    this.setState({
      products: updatedProduct
    })
  }

  render() {

    const boughtProduct = this.state.products.filter(prod => { return prod.bought })
    const pendingBuy = this.state.products.filter(prod => !prod.bought);
    console.log(boughtProduct);
    console.log(pendingBuy);

    return (
      <div className="container">
        <Header />
        <Title />
        <Input addNewProductFunc={this.addNewProduct} />

        <ItemCount count={pendingBuy.length} />
        {pendingBuy.map(prod => <Item text={prod.text} bought={prod.bought} quantity={prod.quantity} key={prod.id} id={prod.id} deleteProductFunc={this.deleteProduct} boughtProductFunc={this.boughtProduct} dueBy={prod.dueBy} />
        )}

        <h5 className="title">You have bought {boughtProduct.length} products: </h5>

        {boughtProduct.map(prod => <Item text={prod.text} bought={prod.bought} key={prod.id} id={prod.id} deleteProductFunc={this.deleteProduct} dueBy={prod.dueBy} />
        )}



      </div>
    );
  }
}

export default App;
