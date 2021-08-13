import React from "react";

const productDetails = (props) => {
  const Product = props.products.filter(
    (c) => c.id === parseInt(props.match.params.id)
  );
  return (
    <React.Fragment>
      <h2>product details No.{props.match.params.id}</h2>
      <h2>{Product.name}</h2>
      <h2>count in shopping cart:{Product.num}</h2>
    </React.Fragment>
  );
};

export default productDetails;
