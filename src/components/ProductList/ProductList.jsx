import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../api';
import css from './ProductList.module.css';
import { Link, useLocation } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts({ limit: 10 });
      console.log(data.products);
      setProducts(data.products);
    };
    getProducts();
  }, []);

  return (
    <ul className={css.list}>
      {Array.isArray(products) &&
        products.map(product => (
          <li className={css.item} key={product.id}>
            <Link
              state={{
                from: location,
              }}
              to={`/catalog/${product.id}`}
            >
              <img
                className={css.img}
                src={product.thumbnail}
                alt={product.title}
              />
              <p className={css.price}>{product.price} $</p>
              <h3>{product.title}</h3>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
