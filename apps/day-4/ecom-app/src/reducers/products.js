
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      state = [...action.payload];
      return state;

    case 'ADD_PRODUCT':
      state = [...state, action.payload];
      return state;

    case 'GET_PRODUCT':
    case 'UPDATE_PRODUCT':
      let product = state.find(p => p._id === action.payload._id);

      if (product) {
        product = { ...action.payload, category: { ...action.payload.category } };
        state = state.map(p => {
          return p._id === product._id ? product : p;
        });
      } else {
        state = [...state, action.payload];
      }
      return state;

    case 'DELETE_PRODUCT':
      state = state.filter(p => p._id !== action.payload._id);
      return state;

    default:
      return state;
  }
};

export default productsReducer;