// import axios from 'axios';

// const API_KEY = '0e7a892e7d49146dab83218685efef67';

// export const fetchProducts = async query => {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products', {
//       params: {
//         query,
//         fields: 'item_name,brand_name,nf_calories',
//         appKey: API_KEY,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (err) {
//     console.error('Error fetching fruits:', err);
//   }
// };
// fetchProducts();

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
