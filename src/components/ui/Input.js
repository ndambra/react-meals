import './Input.css';
import { forwardRef } from 'react';

const Input = forwardRef(({ label, id, ...rest }, ref) => {
  return (
    <div className='input'>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...rest} />
    </div>
  );
});

export default Input;
