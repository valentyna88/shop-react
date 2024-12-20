import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../api';
import css from './ProductList.module.css';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProducts({ limit: 10 });
        console.log(data.products);
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (products?.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <ul className={css.list}>
      {Array.isArray(products) &&
        products.map(({ id, thumbnail, title, price }) => (
          <li className={css.item} key={id}>
            <Link state={{ from: location }} to={`/catalog/${id}`}>
              <img className={css.img} src={thumbnail} alt={title} />
              <p className={css.price}>{price} $</p>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
