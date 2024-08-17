import axios from 'axios';

export const listProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);
    dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
