import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cart from "./Cart";
import Products from "./Products";
import { useLoaderData } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

const Shop = () => {
  useTitle("Shop");

  const posts = useLoaderData();

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Products posts={posts} />
        </Col>
        <Col sm={4}>
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
