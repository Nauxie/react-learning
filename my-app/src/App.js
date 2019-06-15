import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './components/MyInfo.js';
import Product from './components/Product.js'
import products from "./vschoolProducts.js"


class App extends Component {
  render() {
    //console.log(products)
    const productList = products.map(prod => {
      return <Product key={prod.id} name={prod.name} desc={prod.description} price = {prod.price}/>
    })
    return (
      <div>
        {productList}
      </div>
    );
  }
}

export default App
