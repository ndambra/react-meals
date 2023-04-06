import './Input.css';
import { forwardRef } from 'react';

const Input = forwardRef(({ className, label, id, ...rest }, ref) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...rest} />
    </div>
  );
});

export default Input;
