export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'CLEAR_USER':
      return {};
    default:
      return state;
  }
}