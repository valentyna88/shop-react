import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../api';
import css from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts({ limit: 10 });
      setProducts(data.products);
    };
    getProducts();
  }, []);

  return (
    <ul className={css.list}>
      {products !== null &&
        products.map(product => (
          <li className={css.item} key={product.id}>
            <img
              className={css.img}
              src={product.thumbnail}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
