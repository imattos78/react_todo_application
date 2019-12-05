import React, { Component } from 'react';
import axios from "axios";
//import uuid from "uuid/v4";
import moment from "moment";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Input from "./components/input/Input";
import ItemCount from "./components/itemCount/ItemCount";
import Item from "./components/item/Item";



import './App.css';



class App extends Component {
  state = {
    products: []
      // { text: "Tomato", quantity: 2, bought: true, date: "2019-10-27", id: uuid(), dueBy: "2019-11-30" },
     
  };
  componentDidMount() {
    axios.get("https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products")
      
    .then((response) => {
        const productsFromDB = response.data; 
      this.setState ({
        products: productsFromDB
      
    })
  })
       
      .catch(err  => {
        console.log("Error getting products data", err)
      });
  }
  // This func should update the state with a new task
  addNewProduct = (prodText, dueByDate, qty) => {
    const productCopy = this.state.products.slice();
    const newProduct = {
      item_name: prodText,
      completed: false,
      date: moment().format("YYYY-MM-DD"),
      item_id: 1,
      due_date: moment(dueByDate).format("DD-MM-YYYY"),
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

  //   //filter to remove the product that we want to delete
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
        if (product.item_id === id) {
           product.completed = true;
        }
         return product;
      });
       this.setState({
        products: updatedProduct
     })
  }

  render() {

    const boughtProduct = this.state.products.filter(prod => prod.completed );
    const pendingBuy = this.state.products.filter(prod => !prod.completed);
    console.log(boughtProduct);
    console.log(pendingBuy);

    return (
      <div className="container">
        <Header />
        <Title />
        <Input addNewProductFunc={this.addNewProduct} />

        <ItemCount count={pendingBuy.length} />
        {pendingBuy.map(prod => <Item text={prod.item_name} bought={prod.completed} quantity={prod.quantity} key={prod.item_id} id={prod.item_id} deleteProductFunc={this.deleteProduct} boughtProductFunc={this.boughtProduct} dueBy={prod.due_date} />
        )}

        <h5 className="title">You have bought {boughtProduct.length} products: </h5>

        {boughtProduct.map(prod => <Item text={prod.item_name} bought={prod.completed} key={prod.item_id} id={prod.item_id} deleteProductFunc={this.deleteProduct} dueBy={prod.due_date} />
        )}



      </div>
    );
  }
}

export default App;
