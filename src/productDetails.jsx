import React from "react";
import qs from "query-string";

const ProductDetails = (props) => {
  const res = qs.parse(props.location.search);
  console.log(res);
  const Product = props.products.filter(
    (c) => c.id === parseInt(props.match.params.id)
  )[0];
  return (
    <React.Fragment>
      <h2>product details No.{props.match.params.id}</h2>
      <h2>{Product.name}</h2>
      <h2>count in shopping cart:{Product.num}</h2>
    </React.Fragment>
  );
};

export default ProductDetails;
