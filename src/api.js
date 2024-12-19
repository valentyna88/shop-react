import axios from 'axios';

const productsInstance = axios.create({
  baseURL: 'https://dummyjson.com/products',
});

export const fetchProducts = async params => {
  try {
    const { data } = await productsInstance.get('/', {
      params,
    });
    console.log(data);

    return data;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};

fetchProducts();

export const fetchProductById = async productId => {
  try {
    const { data } = await productsInstance.get(`/${productId}`);
    return data;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
