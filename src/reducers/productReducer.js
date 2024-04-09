let initialState = {
  loading: false,
  products: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_LOADING":
      return {
        ...state,
        loading: action.payload,
        products: [],
        error: "",
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: "",
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
