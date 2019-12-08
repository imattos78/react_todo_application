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
    console.log(productCopy)
    const newProduct = {
      item_name: prodText,
      completed: false,
      date: moment().format("YYYY-MM-DD"),
      //item_id: 1,
      due_date: dueByDate,
      quantity: qty,
      user_id: 1
    }
    axios.post("https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products", newProduct)
      .then((response)=>{
          console.log(response);
           const productsFromDB = response.data;
            productCopy.push(productsFromDB)
           this.setState({
            products: productCopy

          });
      })
      .catch((err)=>{
        console.log("Error inserting product", err);
      });
  };

  //Remove the product with th ID in question from this.state.products   
     deleteProduct = id => {
      axios.delete(`https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products/${id}`)
        .then((response)=>{
          const filteredProduct = this.state.products.filter(product =>{
            return product.item_id !== id
          })
          this.setState({
            products: filteredProduct
          });
        })
          .catch((err)=>{
            console.log(err);
          })

  };

   boughtProduct = id => {
    
    const updatedProduct = this.state.products.filter(product => product.item_id === id);
    console.log(updatedProduct)
    let products = this.state.products;
    
    const data = {
      item_name: updatedProduct[0].item_name,
      completed: !updatedProduct[0].completed,
      date: updatedProduct[0].date,
      //item_id: 1,
      due_date: updatedProduct[0].due_date,
      quantity: updatedProduct[0].quantity,
      user_id: updatedProduct[0].user_id,
    }
    updatedProduct[0].completed = data.completed;

     axios.put(`https://awfu5c5hx6.execute-api.eu-west-1.amazonaws.com/dev/products/${id}`, data)
      .then((response) =>{
         
        this.setState({
          products: products
       })

      })
      .catch((err)=>{
        console.log(err);
      })
      
  };
  
  render() {

    const boughtProduct = this.state.products.filter(prod => prod.completed)
    const pendingBuy = this.state.products.filter(prod => !prod.completed)
    console.log(boughtProduct);
    console.log(pendingBuy);

    return (
      <div className="container">
        <Header />
        <Title />
        <Input addNewProductFunc={this.addNewProduct} />

        <ItemCount count={pendingBuy.length} />
        {pendingBuy.map(prod => <Item text={prod.item_name} bought={prod.completed} quantity={prod.quantity} key={prod.item_id} id={prod.item_id} deleteProductFunc={this.deleteProduct} boughtProductFunc={this.boughtProduct} dueBy={moment(prod.due_date).format("DD-MM-YYYY")} />
        )}

        <h5 className="title">You bought {boughtProduct.length} products: </h5>

        {boughtProduct.map(prod => <Item text={prod.item_name} bought={prod.completed} key={prod.item_id} id={prod.item_id} deleteProductFunc={this.deleteProduct} dueBy={moment(prod.due_date).format("DD-MM-YYYY")} />
        )}



      </div>
    );
  }
}

export default App;
