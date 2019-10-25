import * as Api from '../api/products';

export const getProducts = () => {
  return async dispatch => {
    try {
      const payload = await Api.getProducts();
      dispatch({
        type: 'GET_PRODUCTS',
        payload
      });
    } catch (e) {
      console.log('Get products failed.');
      console.log('Error:', e);
    }
  };
};

export const addProduct = product => {
  return async dispatch => {
    try {
      const payload = await Api.addProduct(product);
      dispatch({
        type: 'ADD_PRODUCT',
        payload
      });
    } catch (e) {
      console.log('Add product failed.');
      console.log('Error:', e);
    }
  };
};

export const getProduct = id => {
  return async dispatch => {
    try {
      const payload = await Api.getProduct(id);
      dispatch({
        type: 'GET_PRODUCT',
        payload
      });
    } catch (e) {
      console.log('Get product failed.');
      console.log('Error:', e);
    }
  };
};

export const updateProduct = (id, product) => {
  return async dispatch => {
    try {
      const payload = await Api.updateProduct(id, product);
      dispatch({
        type: 'UPDATE_PRODUCT',
        payload
      });
    } catch (e) {
      console.log('Update product failed.');
      console.log('Error:', e);
    }
  };
};

export const deleteProduct = id => {
  return async dispatch => {
    try {
      const payload = await Api.deleteProduct(id);
      dispatch({
        type: 'DELETE_PRODUCT',
        payload
      });
    } catch (e) {
      console.log('Delete product failed.');
      console.log('Error:', e);
    }
  };
};
