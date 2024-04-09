import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";
import { getProductDetails } from "../../actions/ProductDetailsActions";
import ProductDetailsContainer from "../UI/ProductDetailsContainer/ProductDetailsContainer";

export default function ProductDetails() {
  const params = useParams();
  const productId = params.productId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  const { loading, productDetails, error } = useSelector(
    (state) => state.product
  );

  return loading ? (
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
