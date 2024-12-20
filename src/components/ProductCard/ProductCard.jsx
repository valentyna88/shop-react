import css from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    thumbnail,
    category,
    brand,
    rating,
    stock,
    reviews,
    shippingInformation,
  } = product;

  return (
    <div className={css.card}>
      <img src={thumbnail} alt={title} />

      <div className={css.infoWrapper}>
        <h1>{title}</h1>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Brand:</strong> {brand}
        </p>
        <p>{description}</p>
        <p>{price} $</p>
        <p>
          <strong>Rating:</strong> {rating} / 5
        </p>
        <p>
          <strong>In Stock:</strong> {stock}
        </p>
        <p>
          <strong>Shipping Information :</strong> {shippingInformation}
        </p>

        <div className={css.reviews}>
          <h2>Customer Reviews</h2>
          {reviews && reviews.length > 0 ? (
            <ul>
              {reviews.map((review, index) => (
                <li key={index} className={css.reviewItem}>
                  <p>
                    {review.reviewerName}: {review.text}
                  </p>
                  <p>
                    {review.comment}: {review.text}
                  </p>
                  <p>Rating: {review.rating} / 5</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
