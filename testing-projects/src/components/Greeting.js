<<<<<<< HEAD
import Output from "./Output";
=======
>>>>>>> 8831f51234b89c5903511b5fc542b3d14fb260ea
import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world</h2>
<<<<<<< HEAD
      {!changedText && <Output>Its good to see you!</Output>}
      {changedText && <Output>Changed</Output>}
=======
      {!changedText && <p>Its good to see you!</p>}
      {changedText && <p>Changed</p>}
>>>>>>> 8831f51234b89c5903511b5fc542b3d14fb260ea
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
