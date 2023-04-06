import './CartList.css';
import useCart from '../../hooks/use-cart';
import CartItem from './CartItem';

const CartList = () => {
  const { items, totalAmount, addItem, removeItem } = useCart().cartContext;
  const totalPrice = totalAmount.toFixed(2);

  const handleAddItem = (item) => {
    addItem({ ...item, qty: 1 });
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const renderedCartItems = items.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={item}
        onAdd={handleAddItem.bind(null, item)}
        onRemove={handleRemoveItem.bind(null, item.id)}
      />
    );
  });

  let contents;
  if (renderedCartItems.length > 0) {
    contents = <ul className='cart-items'>{renderedCartItems}</ul>;
  } else {
    contents = <p>Cart is empty!</p>;
  }

  return (
    <div className='cart-list'>
      {contents}
      <div className='cart-list-total'>
        <span>Total Amount</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default CartList;
