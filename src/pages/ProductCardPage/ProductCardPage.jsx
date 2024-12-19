import { useLocation, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../../api';
import GoBack from '../../components/GoBack/GoBack';

const ProductCardPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state ?? '/catalog';

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(productId);
      setProduct(data);
    };
    getProduct();
  }, [productId]);

  if (!product) return null;

  return (
    <main>
      <section>
        <GoBack to={backLinkHref}>Go back</GoBack>
        <ProductCard product={product} />
      </section>
    </main>
  );
};

export default ProductCardPage;
