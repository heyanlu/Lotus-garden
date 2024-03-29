import React, { useState, useRef } from "react";

import "./Login.css";

function Login({ username, setUsername }) {
  const dialogRef = useRef();
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nameError, setNameError] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    if (!name) {
      setNameError("You must enter username to login!");
    } else {
      setUsername(name);
      setNameError("")
      setIsLoggedIn(true);
      console.log("Form data saved!");
      dialogRef.current.close();
    }
  }

  function handleLogout() {
    setUsername("");
    setIsLoggedIn(false);
    console.log("Logged out!");
  }

  return (
    <>
      {isLoggedIn && username ? (
        <button className="identification-button logout" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button
          className="identification-button login"
          onClick={() => dialogRef.current.showModal()}
        >
          Login
        </button>
      )}

      <dialog className="dialog" ref={dialogRef}>
        <form action="#" method="POST" onSubmit={handleLogin}>
          <h3>Check in and win a souvenir!</h3>
          <label htmlFor="name">Username: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setNameError("");
              setName(event.target.value)}
            }
          />
          <p className="error">{nameError}</p>

          <div className="button-container">
            <button className="button login" type="submit">
              Check in
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Login;
