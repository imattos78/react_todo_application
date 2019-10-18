import React from 'react';
import Header from "./Header";
import Title from "./Title";
import Input from "./Input";
import ItemCount from "./ItemCount";
import Item from "./Item";

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Title />
      <Input />
      <ItemCount count={6} />
      <Item />
     
      
    </div>
  );
}

export default App;
