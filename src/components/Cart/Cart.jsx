import { FaShoppingCart } from 'react-icons/fa';
import css from './Cart.module.css';

const Cart = () => {
  return (
    <div className={css.rightSection}>
      <button className={css.cartBtn}>
        <div className={css.cartWrapper}>
          <FaShoppingCart />
          <span className={css.cartCount}>3</span>
        </div>
      </button>
    </div>
  );
};

export default Cart;
