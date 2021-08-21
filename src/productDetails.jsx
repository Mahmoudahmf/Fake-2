import React, { Component } from "react";

import qs from "query-string";

class ProductDetails extends Component {
  state = {};

  handleSave = () => {
    this.props.history.push("/cart");
  };

  render() {
    const res = qs.parse(this.props.location.search);
    console.log(res);
    const Product = this.props.products.filter(
      (c) => c.id === parseInt(this.props.match.params.id)
    )[0];
    return (
      <React.Fragment>
        <h2>product details No.{this.props.match.params.id}</h2>
        <h2>{Product.name}</h2>
        <h2>count in shopping cart:{Product.num}</h2>
        <button onClick={this.handleSave} className="btn btn-primary btn-sm">
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
