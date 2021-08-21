import React from "react";


const Cart = (props) => {
  const style = !props.Product.isInCart
    ? { color: "#80808080", cursor: "pointer" }
    : { cursor: "pointer" };
  return (
    <i
      style={style}
      onClick={() => props.onClick(props.Product)}
      class="fas fa-cart-plus"
    ></i>
  );
};

export default Cart;
