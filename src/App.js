import React, { Component } from 'react';
import uuid from "uuid/v4";
import moment from "moment";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Input from "./components/input/Input";
import ItemCount from "./components/itemCount/ItemCount";
import Item from "./components/item/Item";
import './App.css';

//   return (yyyy + "-" + mm + "-" + dd);
// };

//CAMBIAR LA FECHA POR LA LIBRERIA MOMENTJS

//CREAR UN COMPONENT DE ELEMNTOS RECIENTES COMPRADOS Y QUE LOS PUEDAS VOLVER A PASAR A LA LISTA PARA VOLVER A COMPRAR (SELECCIONAR UNO O VARIOS ELEMENTOS)


class App extends Component {
  state = {
    products: [
      {text: "Tomato", quantity: 2, bought: true, date: "2019-10-27", id: uuid()},
      {text: "Avocado",quantity: 3, bought: true, date: "2019-10-28", id: uuid()},
      {text: "Bread", quantity: 1, bought: false, date: "2019-11-03", id: uuid()},
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
      date: moment().format("YYYY-MM-DD"),
      id: uuid()
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

  const boughtProduct = this.state.products.filter(prod =>{return prod.bought}) 
  const pendingBuy = this.state.products.filter(prod => !prod.bought);
  console.log(boughtProduct);
  console.log(pendingBuy);
  
  return (
    <div className="container">
      <Header />
      <Title />
      <Input addNewProductFunc={this.addNewProduct} />
      <ItemCount count={pendingBuy.length} />
      {pendingBuy.map(prod => <Item text={prod.text} bought={prod.bought} quantity={prod.quantity} date={prod.date} key={prod.id} id={prod.id} deleteProductFunc={this.deleteProduct} boughtProductFunc={this.boughtProduct} />
        )}

         <h5 className="title">You recently bought: </h5>
       
        {boughtProduct.map(prod => <Item text={prod.text} bought={prod.bought} key={prod.id} id={prod.id} deleteProductFunc={this.deleteProduct} />
        )}
   
     
      
    </div>
  );
  }
}

export default App;
