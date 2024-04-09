import React from "react";
import { Container, Row, Col, Carousel, Badge } from "react-bootstrap";
import { FaDollarSign, FaStar } from "react-icons/fa";

export default function ProductDetailsContainer(props) {
  return (
    <div className="carousel-images">
      <Container fluid>
        <Row className="mt-5">
          <Col md={6}>
            <Carousel fade={true} pause={false}>
              {props.productDetails.images &&
                props.productDetails.images.map((image) => (
                  <Carousel.Item data-interval={false}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
          <Col md={3} className="mt-5">
            <div>
              <p>
                <h4>{props.productDetails.title}</h4>(in{" "}
                {props.productDetails.category})
              </p>
              <p>
                from {props.productDetails.brand}{" "}
                <Badge bg="success">
                  {props.productDetails.rating}
                  <FaStar className="ml-1 mb-1" />
                </Badge>
              </p>
            </div>
            <h5>
              <FaDollarSign className="mb-1" />
              {props.productDetails.price}{" "}
              <>
                {props.productDetails.discountPercentage &&
                  `(-${props.productDetails.discountPercentage} %)`}
              </>
            </h5>
          </Col>
          <Col md={3} className="mt-5">
            <div>
              <h6>Details:</h6>
              <p>{props.productDetails.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
