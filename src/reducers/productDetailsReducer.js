let initialState = {
  loading: false,
  productDetails: {},
  error: "",
};

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DETAILS_LOADING":
      return {
        ...state,
        loading: action.payload,
        productDetails: {},
        error: "",
      };
    case "GET_PRODUCT_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
        error: "",
      };
    case "GET_PRODUCT_DETAILS_FAILURE":
      return {
        ...state,
        loading: false,
        productDetails: {},
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productDetailsReducer;
