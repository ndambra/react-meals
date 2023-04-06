import './Header.css';
import { useState } from 'react';
import HeaderCart from './HeaderCart';
import Cart from '../cart/Cart';
import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Cart showModal={showCart} onCloseCart={handleCloseCart} />
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCart onClickOpenCart={handleOpenCart} />
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;
