import './MealItem.css';
import MealItemForm from './MealItemForm';
import useCart from '../../hooks/use-cart';

const MealItem = ({ mealItem }) => {
  const { cartContext } = useCart();

  const { id, name, description, price } = mealItem;
  const formattedPrice = price.toFixed(2);

  const handleAddMealToCart = (newQty) => {
    cartContext.addItem({
      id,
      name,
      price,
      qty: newQty,
    });
  };

  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>${formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddMeal={handleAddMealToCart} />
      </div>
    </li>
  );
};

export default MealItem;
