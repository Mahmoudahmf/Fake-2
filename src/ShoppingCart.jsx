import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  // this.setState({num:this.props.product.num + 1})
  render() {
    return(
      <React.Fragment>
      <h1>shopping cart</h1>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={this.props.onRest}
      >
        Rest
      </button>

      {this.props.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          delete={this.props.onDelete}
          increament={this.props.onIncreament}
        ></Product>
      ))}
    </React.Fragment>
    )
  }
    
}

export default ShoppingCart;
