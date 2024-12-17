import { NavLink, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../products.json';

const ProductDetailsPage = () => {
  const { productId } = useParams(); // Отримуємо параметр з URL
  const product = products.find(item => item.id === Number(productId));

  if (!product) {
    return (
      <main>
        <h2>Sorry, we could not find the product you were looking for.</h2>
        <NavLink to="/catalog">Go back to Catalog</NavLink>
      </main>
    );
  }
  return (
    <main>
      <section>
        <ProductCard product={product} />
      </section>
    </main>
  );
};

export default ProductDetailsPage;
