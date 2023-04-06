import './HeaderCart.css';
import CartIcon from '../cart/CartIcon';

const HeaderCartButton = ({ handleClickCart }) => {
  const openCart = () => {
    handleClickCart();
  };
  return (
    <button className='button' onClick={openCart}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>3</span>
    </button>
  );
};

export default HeaderCartButton;
