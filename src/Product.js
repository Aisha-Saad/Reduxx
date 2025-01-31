import { useState, useEffect } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = () => {
  const [products, getProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProduct(result));
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
      
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>SR {product.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Products</h1>

      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
