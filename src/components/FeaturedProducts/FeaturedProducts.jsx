import featuredProducts from '../../featuredProducts.json';

const FeaturedProducts = () => {
  return (
    <ul>
      {featuredProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default FeaturedProducts;
