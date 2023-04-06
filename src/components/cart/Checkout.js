import './Checkout.css';
import { useRef, useState } from 'react';
import Input from '../ui/Input';

const defaultValidState = {
  name: true,
  street: true,
  city: true,
  zipcode: true,
  form: true,
};

const Checkout = ({ orderTotal, onCancelOrder, onPlaceOrder }) => {
  const [formInputsValid, setFormInputsValid] = useState(defaultValidState);

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const zipInputRef = useRef();

  const totalPrice = orderTotal.toFixed(2);

  const validateInputField = (value) => {
    if (value) return value.trim() !== '';
    return false;
  };

  const handleSubmitOrder = (event) => {
    event.preventDefault();

    const customerInfo = {
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      city: cityInputRef.current.value,
      zipcode: zipInputRef.current.value,
    };

    const nameIsValid = validateInputField(customerInfo.name);
    const streetIsValid = validateInputField(customerInfo.street);
    const cityIsValid = validateInputField(customerInfo.city);
    const zipIsValid = validateInputField(customerInfo.zipcode);

    const formValid = nameIsValid && streetIsValid && cityIsValid && zipIsValid;

    if (!formValid) {
      setFormInputsValid({
        name: nameIsValid,
        street: streetIsValid,
        city: cityIsValid,
        zipcode: zipIsValid,
      });
    } else {
      setFormInputsValid(defaultValidState);
      onPlaceOrder(customerInfo);
    }
  };

  const handleCancelButton = (event) => {
    event.preventDefault();
    onCancelOrder();
  };

  const inputClass = (inputIsValid) => {
    return inputIsValid
      ? 'checkout-control'
      : 'checkout-control checkout-invalid ';
  };

  return (
    <form className='checkout-form' onSubmit={handleSubmitOrder}>
      <Input
        className={inputClass(formInputsValid.name)}
        ref={nameInputRef}
        label='Full Name'
        type='string'
      />
      <Input
        className={inputClass(formInputsValid.street)}
        ref={streetInputRef}
        label='Street'
        type='string'
      />
      <Input
        className={inputClass(formInputsValid.city)}
        ref={cityInputRef}
        label='City'
        type='string'
      />
      <Input
        className={inputClass(formInputsValid.zipcode)}
        ref={zipInputRef}
        label='Zipcode'
        type='string'
      />
      <div className='checkout-actions'>
        {!formInputsValid.form && (
          <p className='error'>All fields are required</p>
        )}
        <p>Total: ${totalPrice}</p>
        <button onClick={handleCancelButton}>Cancel</button>
        <button className='checkout-submit'>Place Order</button>
      </div>
    </form>
  );
};

export default Checkout;
