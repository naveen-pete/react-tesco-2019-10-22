import { getCategories as getCategoriesApi } from '../api/categories';

export const getCategories = () => {
  return async dispatch => {
    try {
      const categories = await getCategoriesApi();
      dispatch({
        type: 'GET_CATEGORIES',
        payload: categories
      });
    } catch (e) {
      console.log('Get categories failed!')
      console.log('Error:', e);
    }
  };
}