import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>
          fresh harvest box is your one-stop place for a delicious fruit basket
        </h1>
        <p>
          Our expertly curated fruit baskets are made with the freshest, highest
          quality fruits available. Whether you are looking for a healthy snack
          or a gift for a loved one, Fresh Harvest Box has got you covered.
        </p>
        <img src="/src/img/image1.png" alt="" />
        <p>Fruit</p>
        <p>
          Refreshing and juicy, watermelon is the perfect summer treat and a
          great source of hydration
        </p>
        <img src="/src/img/image2.png" alt="" />
        <p>Fruit</p>
        <p>
          Sweet and juicy, strawberries are packed with vitamin C and
          antioxidants, making them a delicious and healthy snack
        </p>
        <img src="/src/img/image3.png" alt="" />
        <p>#organic</p>
        <p>#products</p>
        <p>#basket</p>
        <p>#fruits</p>
        <button type="button">Shop now</button>
        <FeaturedProducts />
      </section>
    </main>
  );
};

export default HomePage;
