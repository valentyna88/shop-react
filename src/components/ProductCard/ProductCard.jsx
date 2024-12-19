const ProductCard = ({ product }) => {
  const { title, description, price, thumbnail } = product;

  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnail} alt={title} />
      <p>{description}</p>
      <p>{price} $</p>
    </div>
  );
};

export default ProductCard;
