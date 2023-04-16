import React, { useState } from "react";
import InvalidInputModal from "../ErrorModals/invalidInputModal";
import "./Modal.css";

function Form(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const handleSubmitData = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Enter a valid name and age",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Enter a valid age",
      });
      return;
    }

    const userData = {
      username: userName,
      age: userAge,
      id: Math.random().toString(),
    };

    console.log(userData);
    props.onAddData(userData);
    setUserName("");
    setUserAge("");
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <InvalidInputModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={handleSubmitData}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={userNameHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" value={userAge} onChange={ageHandler} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Form;
