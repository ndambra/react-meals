import './Cart.css';
import { useState } from 'react';
import Modal from '../ui/Modal';
import CartList from './CartList';
import CartActions from './CartActions';
import Checkout from './Checkout';
import useCart from '../../hooks/use-cart';

const url = '<ADD URL for orders>';

const Cart = ({ showModal, onCloseCart }) => {
  const { cartContext } = useCart();

  const [loadCart, setLoadCart] = useState(true);
  const [done, setDone] = useState(false);

  const handleLeaveCart = () => {
    setLoadCart(true);
    setDone(false);
    onCloseCart();
  };

  const handleOrder = () => {
    setLoadCart(false);
  };

  const handleCancelOrder = () => {
    setLoadCart(true);
  };

  const handleSubmitOrder = async (customerInfo) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        customerInfo,
        order: { items: cartContext.items, total: cartContext.totalAmount },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setLoadCart(true);
    setDone(true);
    cartContext.clearCart();
  };

  let content;
  if (loadCart && !done) {
    content = (
      <>
        <CartList cart={cartContext} />
        <CartActions onCloseCart={handleLeaveCart} onOrder={handleOrder} />
      </>
    );
  } else if (loadCart && done) {
    content = <p>All done!! Thank you for your order!</p>;
  } else {
    content = (
      <Checkout
        orderTotal={cartContext.totalAmount}
        onCancelOrder={handleCancelOrder}
        onPlaceOrder={handleSubmitOrder}
      />
    );
  }

  const modal = <Modal onClose={handleLeaveCart}>{content}</Modal>;
  return <>{showModal && modal}</>;
};

export default Cart;
