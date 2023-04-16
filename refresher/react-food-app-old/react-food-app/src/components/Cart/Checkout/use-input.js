import { useState } from "react";

function useInput(validateFunc) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isBlured, setIsBlured] = useState(false);

  const isValid = validateFunc(enteredValue);
  const hasError = !isValid && isBlured;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const isBluredHandler = () => {
    setIsBlured(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsBlured(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid,
    blurHandler: isBluredHandler,
    reset,
    valueChange: valueChangeHandler,
  };
}

export default useInput;
