import { useState, useRef } from "react";

import "./Signup.css";

function Signup() {
  const dialogRef = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    addressIsChecked: false,
    shippingAddress: "",
    billingAddress: "",
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");

  function handleForm(event) {
    event.preventDefault();
    if (formData.firstName === "") {
      setFirstNameError("This field is required");
    } else if (formData.lastName === "") {
      setLastNameError("This field is required");
    } else if (!formData.email.includes("@")) {
      setEmailError("Email must include @");
    } else if (formData.confirmEmail !== formData.email) {
      setConfirmEmailError("Emails do not match");
    } else {
      console.log("Form data saved!");
      dialogRef.current.close();
    }
  }

  function handleCheckboxChange() {
    const updatedFormData = {
      ...formData,
      addressIsChecked: !formData.addressIsChecked,
    };

    if (updatedFormData.addressIsChecked) {
      updatedFormData.billingAddress = updatedFormData.shippingAddress;
    } else {
      updatedFormData.billingAddress = "";
    }

    setFormData(updatedFormData);
  }

  return (
    <>
      <button
        className="sign-up-button"
        type="button"
        onClick={() => dialogRef.current.showModal()}
      >
        Subscribe
      </button>

      <dialog className="dialog" ref={dialogRef}>
        <form
          className="register"
          action="/register"
          method="POST"
          onSubmit={handleForm}
        >
          <h3 className="register-title">Sign Up</h3>

          <div className="field-container">
            <label htmlFor="first-name">First Name: </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              value={formData.firstName}
              onChange={(event) => {
                setFirstNameError("");
                setFormData({ ...formData, firstName: event.target.value });
              }}
            />
            <p className="error">{firstNameError}</p>
          </div>

          <div className="field-container">
            <label htmlFor="last-name">Last Name: </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              value={formData.lastName}
              onChange={(event) => {
                setLastNameError("");
                setFormData({ ...formData, lastName: event.target.value });
              }}
            />
            <p className="error">{lastNameError}</p>
          </div>

          <div className="field-container">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={(event) => {
                setEmailError("");
                setFormData({ ...formData, email: event.target.value });
              }}
            />
            <p className="error">{emailError}</p>
          </div>

          <div className="field-container">
            <label htmlFor="confirmEmail">Confirm Email: </label>
            <input
              type="text"
              id="confirmEmail"
              name="confirm-email"
              value={formData.confirmEmail}
              onChange={(event) => {
                setConfirmEmailError("");
                setFormData({ ...formData, confirmEmail: event.target.value });
              }}
            />
            <p className="error">{confirmEmailError}</p>
          </div>

          <div className="field-container">
            <label htmlFor="shipping">Shipping Address: </label>
            <input
              type="text"
              id="shipping"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  shippingAddress: event.target.value,
                })
              }
            />
          </div>

          <label>
            <input
              type="checkbox"
              checked={formData.addressIsChecked}
              onChange={handleCheckboxChange}
            />
            Billing address is the same as shipping address
          </label>

          <div className="field-container">
            <label htmlFor="billing">Billing Address: </label>
            <input
              type="text"
              id="billing"
              name="billingAddress"
              value={formData.billingAddress}
              disabled={formData.addressIsChecked}
              onChange={(event) =>
                setFormData({ ...formData, billingAddress: event.target.value })
              }
            />
          </div>

          <div className="button-container">
            <button
              className="button close"
              type="button"
              onClick={() => dialogRef.current.close()}
            >
              Close
            </button>
            <button className="button submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Signup;
