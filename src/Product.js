import { useState, useEffect } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardBody, CardFooter } from "react-bootstrap";

const Product = () => {
  const [products, getProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProduct(result));
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3">
      <Card key={product.id} className="h-100" style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" ,padding:"10px"}}
          />
        </div>
      
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>SR {product.price}</Card.Text>
          <Card.Footer style={{background:"white"
          }}>
            <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        
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
