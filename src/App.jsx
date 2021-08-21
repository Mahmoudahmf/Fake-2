import React, { Component } from "react";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import ProductDetails from "./productDetails";

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
        <Navbar
          productCount={this.state.products.filter((p) => p.num > 0).length}
        ></Navbar>
        <main className="container">
          <Route
            path="/ProductDetails/:id"
            render={(props) => (
              <ProductDetails
                products={this.state.products}
                {...props}
              ></ProductDetails>
            )}
          ></Route>

          <Route
            path="/cart"
            render={(props) => (
              <ShoppingCart
                products={this.state.products}
                onDelete={this.deleteHandel}
                onRest={this.restHandel}
                onIncreament={this.increament}
                {...props}
              ></ShoppingCart>
            )}
          ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/home" component={Home}></Route>
          {/* <ShoppingCart
            products={this.state.products}
            onDelete={this.deleteHandel}
            onRest={this.restHandel}
            onIncreament={this.increament}
          ></ShoppingCart> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
