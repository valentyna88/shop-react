import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>Welcome to Our Store!</h1>
        <p>Explore our wide range of organic products and berries!</p>
        <FeaturedProducts />
      </section>
    </main>
  );
};

export default HomePage;
