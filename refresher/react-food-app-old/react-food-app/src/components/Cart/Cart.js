import React, { Fragment, useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../storeData/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout/Checkout";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [modalSwitch, setModalSwitch] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const modalSwitcher = () => {
    setModalSwitch((prevCheck) => !prevCheck);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmiting(true);
    await fetch(
      "https://react-http-bc805-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  let modalContent = null;

  if (modalSwitch) {
    modalContent = (
      <Fragment>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.handleClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={modalSwitcher}>
              Order
            </button>
          )}
        </div>
      </Fragment>
    );
  } else {
    modalContent = (
      <Checkout onBack={modalSwitcher} onConfirm={submitOrderHandler} />
    );
  }

  const isSubmitingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Succes sending order</p>;

  return (
    <Modal show={props.show} close={props.handleClose}>
      {!isSubmiting && !didSubmit && modalContent}
      {isSubmiting && isSubmitingModalContent}
      {!isSubmiting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
