import React, { Component } from "react";
import axios from "axios";
class Admin extends Component {
  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <h1>Admin</h1>
        <button
          onClick={() => this.props.history.push("/ProductForm/new")}
          className="btn btn-primary"
        >
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.Price}</td>
                  <td>
                    <i
                      onClick={() =>
                        this.props.history.push(`/ProductForm/${product.id}`)
                      }
                      className="fas fa-edit"
                    ></i>
                  </td>
                  <td>
                    <i
                      onClick={() => this.Props.onDelete(product)}
                      className="fas fa-trash"
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Admin;
