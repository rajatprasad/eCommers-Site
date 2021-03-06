import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import "./ProductCarousel.css";
import Rating from "./Rating";
import "./Toprated.css";
import { Row, Col } from "react-bootstrap";

const Toprated = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <h1 className="mt-30">
        <span className="h1__underline">&nbsp;</span>
        Top Rated
        <span className="h1__underline">&nbsp;</span>
      </h1>
      <div className="product__toprated">
        {products.map((product) => (
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded rproduct__card">
              <Link to={`/product/${product._id}`}>
                <Card.Img
                  className="product__image"
                  src={product.image}
                  variant="top"
                />
              </Link>

              <Card.Body className="product__cardbody">
                <Link to={`/product/${product._id}`}>
                  <Card.Title className="product__name" as="div">
                    {product.name}
                  </Card.Title>
                </Link>

                <Card.Text className="product__rating" as="div">
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </Card.Text>

                <Card.Text as="h3">₹{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default Toprated;
