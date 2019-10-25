
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return [...action.payload];

    default:
      return state;
  };
};

export default categoriesReducer;
