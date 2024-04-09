import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";
import { getProductDetails } from "../../actions/ProductDetailsActions";
import "./ProductDetails.css";
import ProductDetailsContainer from "../UI/ProductDetailsContainer/ProductDetailsContainer";

export default function ProductDetails() {
  const params = useParams();
  const productId = params.productId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch]);

  const productDetails = useSelector((state) => state.product.productDetails);
  const isLoading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  console.log(productDetails);

  return isLoading ? (
    <div className="loader">
      <Spinner animation="border" variant="secondary" />
    </div>
  ) : error ? (
    <Alert key="danger" variant="danger">
      Failed to load product details, please try after some time!
    </Alert>
  ) : (
    <ProductDetailsContainer productDetails={productDetails} />
  );
}
