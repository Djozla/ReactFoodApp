import useInput from "../hooks/use-input";
import classes from "./Checkout.module.css";

function Checkout(props) {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) =>
    String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

  const {
    value: address,
    valueIsValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressInputChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: addressReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && addressIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHanlder = async (event) => {
    event.preventDefault();

    if (nameHasError || addressHasError || emailHasError) {
      return;
    }

    if (nameHasError || addressHasError || emailHasError) {
      return;
    }
    const cartItems = {
      name: props.name,
      amount: props.amount,
      price: props.price,
    };

    const data = {
      name: name,
      email: email,
      address: address,
      orderedItems: cartItems,
    };

    const response = await fetch(
      "https://react-http-bc805-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      // handle error
    }

    nameReset();
    emailReset();
    addressReset();
  };

  const inputClass = (inputValidation) => {
    return inputValidation
      ? [classes["form-control"], classes.invalid].join(" ")
      : classes["form-control"];
  };

  return (
    <form onSubmit={formSubmitHanlder}>
      <div className={inputClass(nameHasError)}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={nameInputChangeHandler}
            onBlur={nameBlurHandler}
          />
        </label>
        {nameHasError && (
          <p className={classes["error-text"]}>Name must not be empty</p>
        )}
      </div>

      <div className={inputClass(emailHasError)}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={emailInputChangeHandler}
            onBlur={emailBlurHandler}
          />
        </label>
        {emailHasError && (
          <p className={classes["error-text"]}>Email must not be empty</p>
        )}
      </div>

      <div className={inputClass(addressHasError)}>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={addressInputChangeHandler}
            onBlur={addressBlurHandler}
          />
        </label>
        {addressHasError && (
          <p className={classes["error-text"]}>Address must not be empty</p>
        )}
      </div>
      <button disabled={!formIsValid} type="submit">
        Submit
      </button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default Checkout;
