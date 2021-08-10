import React, { Component } from "react";
import Navbar from "./Navbar";

import ShoppingCart from "./ShoppingCart";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "burger", num: 2 },
      { id: 2, name: "frize", num: 1 },
      { id: 3, name: "cola", num: 3 },
    ],
  };

  deleteHandel = (product) => {
    const newProduct = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products: newProduct });
  };

  restHandel = () => {
    let products = [...this.state.products];
    products = products.map((p) => {
      p.num = 0;
      return p;
    });
    this.setState({ products });
  };

  increament = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };

    products[index].num++;

    this.setState({ products });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <main className="container">
          <ShoppingCart
            products={this.state.products}
            onDelete={this.deleteHandel}
            onRest={this.restHandel}
            onIncreament={this.increament}
          ></ShoppingCart>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
