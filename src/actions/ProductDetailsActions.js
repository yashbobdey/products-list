import axios from "axios";

export const getProductDetails = (productId) => {
  return (dispatch) => {
    dispatch(getProductDetailsLoading(true));
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        dispatch(getProductDetailsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductDetailsFailure(error.message));
      });
  };
};

const getProductDetailsLoading = (loading) => {
  return {
    type: "GET_PRODUCT_DETAILS_LOADING",
    payload: loading,
  };
};

const getProductDetailsSuccess = (productDetails) => {
  return {
    type: "GET_PRODUCT_DETAILS_SUCCESS",
    payload: productDetails,
  };
};

const getProductDetailsFailure = (error) => {
  return {
    type: "GET_PRODUCT_DETAILS_FAILURE",
    payload: error,
  };
};
