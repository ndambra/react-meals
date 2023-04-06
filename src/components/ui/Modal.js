import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <div className='backdrop' onClick={onClose}></div>
      <div className='modal'>{children}</div>
    </>,
    document.querySelector('.modal-container')
  );
};

export default Modal;
