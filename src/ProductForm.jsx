import React, { Component } from "react";
import axios from "axios";
class ProductForm extends Component {
  state = { id: "", name: " ", Price: " " };

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id !== "new") {
      const { data } = await axios.get("http://localhost:3000/products/" + id);
      //clone
      const state = { ...this.state };
      //edit
      state.name = data.name;
      state.Price = data.Price;
      state.id = data.id;
      //setstate
      this.setState(state);
    }
  }

  handelSubmit = async (e) => {
    e.preventDefault();
    //ADD
    if (this.props.match.params.id === "new") {
      const obj = { ...this.state, isInCart: false, num: 0 };
      await axios.post("http://localhost:3000/products/", obj);
    } else {
      //Edit
      const obj = { ...this.state, num: 0, isInCart: false };
      delete obj.id;
      await axios.put("http://localhost:3000/products/" + this.state.id, obj);
    }

    // when i click add it must go to admin component
    this.props.history.replace("/Admin");
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
        <h1>
          {this.props.match.params.id === "new"
            ? "Add Product"
            : "Edit Product"}
        </h1>
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
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={this.handelSubmit}
          >
            {this.props.match.params.id === "new" ? "Add" : "Edit"}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ProductForm;
