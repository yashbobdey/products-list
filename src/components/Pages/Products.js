import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../actions/ProductActions";
import ProductCard from "../UI/ProductCard/ProductCard.js";
import PaginationComponent from "../UI/Pagination/PaginationComponent.js";
import "./Products.css";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { loading, products, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePaginationClick = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  let productList = [];
  if (products) {
    productList = currentProducts.map((product, i) => (
      <Col>
        <ProductCard
          key={i}
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
          item={product}
        />
      </Col>
    ));
  }

  return (
    <div>
      {loading ? (
        <div className="loader">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : error ? (
        <Alert key="danger" variant="danger">
          Failed to load products, please try after some time!
        </Alert>
      ) : (
        <Container>
          <Row>{productList}</Row>
          <Row className="pagination">
            <PaginationComponent
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePaginationClick}
            />
          </Row>
        </Container>
      )}
    </div>
  );
}
