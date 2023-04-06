import './Cart.css';
import Modal from '../ui/Modal';
import CartList from './CartList';
import CartActions from './CartActions';

const Cart = ({ showModal, onCloseCart }) => {
  const modal = (
    <Modal onClose={onCloseCart}>
      <CartList />
      <CartActions handleClose={onCloseCart} />
    </Modal>
  );
  return <>{showModal && modal}</>;
};

export default Cart;
