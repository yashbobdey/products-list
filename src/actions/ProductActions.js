import axios from "axios";

export const getProducts = () => {
  return (dispatch) => {
    dispatch(getProductsLoading(true));
    axios
      .get("https://dummyjson.com/products/")
      .then((response) => {
        console.log(response);
        dispatch(getProductsSuccess(response.data.products));
      })
      .catch((error) => {
        dispatch(getProductsFailure(error.message));
      });
  };
};

const getProductsLoading = (loading) => {
  return {
    type: "GET_PRODUCTS_LOADING",
    payload: loading,
  };
};

const getProductsSuccess = (productData) => {
  return {
    type: "GET_PRODUCTS_SUCCESS",
    payload: productData,
  };
};

const getProductsFailure = (error) => {
  return {
    type: "GET_PRODUCTS_FAILURE",
    payload: error,
  };
};
