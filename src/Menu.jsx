import React from "react";
import Cart from "./Cart";

const Menu = (props) => {
  return (
    <React.Fragment>
      <h1>Menu</h1>
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Cart onClick={props.Click} product={product}></Cart>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Menu;
