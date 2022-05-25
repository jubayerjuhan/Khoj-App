export const addListing = (state = {}, actions) => {
  switch (actions.type) {
    case 'ADD_LISTING_SUCCESS':
      return {
        ...state,
        success: true,
      }
    case 'ADD_LISTING_FAILED':
      return {
        ...state,
        error: true,
        errorMessage: actions.payload
      }
    case 'CLEAR_SUCCESS':
      return {
        ...state,
        success: null,
      }

    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
        errorMessage: null,
      }
    default:
      return state
  }
}