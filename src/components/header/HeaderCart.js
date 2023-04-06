import './HeaderCart.css';
import { useEffect, useState } from 'react';
import useCart from '../../hooks/use-cart';
import CartIcon from '../cart/CartIcon';

const HeaderCartButton = ({ onClickOpenCart }) => {
  const [btnAnimate, setBtnAnimate] = useState(false);
  const { items } = useCart().cartContext;

  const btnClasses = `button ${btnAnimate ? 'bump' : ''}`;
  const numOfItems = items.reduce((total, item) => total + item.qty, 0);

  useEffect(() => {
    if (numOfItems > 0) {
      setBtnAnimate(true);

      const timer = setTimeout(() => {
        setBtnAnimate(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [numOfItems]);

  const handleClick = () => {
    onClickOpenCart();
  };

  return (
    <button className={btnClasses} onClick={handleClick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
