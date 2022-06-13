export const addListing = (state = {}, actions) => {
  switch (actions.type) {
    case "ADD_LISTING_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_LISTING_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "ADD_LISTING_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: actions.payload,
      };
    case "CLEAR_SUCCESS":
      return {
        ...state,
        success: null,
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export const searchReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "SEARCH_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "SEARCH_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
