import useInputV2 from "../hooks/use-inputV2";

const BasicForm = (props) => {
  const {
    value: enteredNameValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    blurHandler: nameIsBluredHandler,
    reset: resetNameInput,
    valueChange: nameChangeHandler,
  } = useInputV2((value) => value.trim() !== "");

  const {
    value: enteredLastNameValue,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    blurHandler: lastNameIsBluredHandler,
    reset: resetLastNameInput,
    valueChange: lastNameChangeHandler,
  } = useInputV2((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    blurHandler: emailIsBluredHandler,
    reset: resetEmailInput,
    valueChange: emailChangeHandler,
  } = useInputV2((value) => value.trim() !== "" && value.trim().includes("@"));

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    console.log(
      "",
      enteredNameValue,
      "\n",
      enteredLastNameValue,
      "\n",
      enteredEmailValue
    );
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameClass = nameHasError ? "form-control invalid" : "form-control";
  const lastNameClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameIsBluredHandler}
            value={enteredNameValue}
          />
          {nameHasError && <p className="error-text">Must not be empty</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameIsBluredHandler}
            value={enteredLastNameValue}
          />
          {lastNameHasError && <p className="error-text">Must not be empty</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailIsBluredHandler}
          value={enteredEmailValue}
        />
        {emailHasError && (
          <p className="error-text">Must not be empty and contain @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
