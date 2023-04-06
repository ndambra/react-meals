import './CartActions.css';
import useCart from '../../hooks/use-cart';

const CartActions = ({ onCloseCart, onOrder }) => {
  const { items } = useCart().cartContext;

  const handleCloseClick = () => {
    onCloseCart();
  };

  const handleOrderClick = () => {
    onOrder();
    console.log('Ordering...!!');
  };
  return (
    <div className='cart-actions'>
      <button className='button--alt' onClick={handleCloseClick}>
        Close
      </button>
      {items.length > 0 && (
        <button className='cart-button' onClick={handleOrderClick}>
          Order
        </button>
      )}
    </div>
  );
};

export default CartActions;
