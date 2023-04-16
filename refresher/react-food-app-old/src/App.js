import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./storeData/CartProvider";

function App() {
  const [show, setShow] = useState(false);

  const handleShowModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);

  return (
    <CartProvider>
      {show && <Cart handleClose={handleCloseModal} show={show} />}
      <Header handleShow={handleShowModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
