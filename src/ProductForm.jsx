import React, { Component } from "react";
import { axios } from "axios";
class ProductForm extends Component {
  state = { name: " ", Price: " " };

  handelSubmit = async (e) => {
    e.preventDefault();
    const obj = { ...this.state, isInCart: false, num: 0 };
    await axios.post("http://localhost:3000/products/", obj);

    // when i click add it must go to admin component
    this.props.history.push("/Admin");
    console.log("Submited");
  };

  handelChange = (e) => {
    let state = { ...this.state };

    state[e.currentTarget.name] = e.currentTarget.value;
    //console.log(e.currentTarget.name);
    //console.log(e.currentTarget.value);

    this.setState(state);
  };
  render() {
    return (
      <React.Fragment>
        <h1>Add Product</h1>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handelChange}
              value={this.state.name}
              id="name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handelChange}
              value={this.state.Price}
              id="Price"
              name="Price"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ProductForm;
