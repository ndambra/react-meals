import './CartItem.css';

const CartItem = ({ item, onAdd, onRemove }) => {
  const { name, price, qty } = item;
  const formatPrice = price.toFixed(2);

  return (
    <li className='cart-item'>
      <div>
        <h2>{name}</h2>
        <div className='cart-item-summary'>
          <span className='cart-item-price'>${formatPrice}</span>
          <span className='cart-item-qty'>x {qty}</span>
        </div>
      </div>
      <div className='cart-item-actions'>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
