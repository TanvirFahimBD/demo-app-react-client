import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Product from "./Product";

const Products = ({ posts }) => {
  return (
    <div>
      <h1>Products: {posts.length}</h1>
      <Row xs={1} md={2} className="g-4">
        {posts.slice(0, 10).map((post) => (
          <Product key={post.id} post={post} />
        ))}
      </Row>
    </div>
  );
};

export default Products;
