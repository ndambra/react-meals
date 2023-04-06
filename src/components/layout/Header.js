import './Header.css';
import { useState } from 'react';
import HeaderCart from './HeaderCart';
import mealsImage from '../../assets/meals.jpg';
import Cart from '../cart/Cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };
  return (
    <>
      <Cart showModal={showCart} handleClose={closeCart} />
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCart handleClickCart={openCart} />
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;
