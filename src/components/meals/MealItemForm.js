import './MealItemForm.css';
import Input from '../ui/Input';
import { useRef } from 'react';

const MealItemForm = ({ id, onAddMeal }) => {
  const qtyRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddMeal(parseInt(qtyRef.current.value));
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input
        ref={qtyRef}
        label='Qty'
        id={'amount_' + id}
        type='number'
        min='1'
        max='5'
        step='1'
        defaultValue='1'
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
