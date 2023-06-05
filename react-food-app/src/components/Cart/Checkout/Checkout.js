import classes from "./Checkout.module.css";
import useInput from "./use-input";

//TODO: Confirm button to send data to Firebase

function Checkout(props) {
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    blurHandler: enteredNameTouched,
    reset: resetNameInput,
    valueChange: nameChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAdress,
    hasError: adressHasError,
    isValid: adressIsValid,
    blurHandler: enteredAdressTouched,
    reset: resetAdressInput,
    valueChange: adressChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    blurHandler: enteredEmailTouched,
    reset: resetEmailInput,
    valueChange: emailChangeHandler,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      value
        .trim()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
  );

  let formIsValid = false;

  if (nameIsValid && adressIsValid && emailIsValid) {
    formIsValid = true;
  }

  async function formSubmitHandler(event) {
    event.preventDefault();
    if (!nameIsValid || !adressIsValid || !emailIsValid) {
      return;
    }

    props.onConfirm({
      fullName: enteredName,
      adress: enteredAdress,
      email: enteredEmail,
    });

    resetNameInput();
    resetAdressInput();
    resetEmailInput();
  }

  const nameClass = nameHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];
  const adressClass = adressHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];
  const emailClass = emailHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={enteredNameTouched}
          value={enteredName}
        />
        {nameHasError && (
          <p className={classes["error-text"]}>Can not be empty</p>
        )}
      </div>
      <div className={adressClass}>
        <label htmlFor="adress">Adress</label>
        <input
          type="text"
          id="adress"
          value={enteredAdress}
          onChange={adressChangeHandler}
          onBlur={enteredAdressTouched}
        />
        {adressHasError && (
          <p className={classes["error-text"]}>Can not be empty</p>
        )}
      </div>
      <div className={emailClass}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={enteredEmailTouched}
        />
        {emailHasError && (
          <p className={classes["error-text"]}>Must be a valid email</p>
        )}
      </div>
      <div className={classes["form-actions"]}>
        <button onClick={props.onBack}>Back</button>
        <button disabled={!formIsValid} onClick={props.onClick}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
