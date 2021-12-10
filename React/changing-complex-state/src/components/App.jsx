import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function contactChanger(e) {
    const { name, value } = e.target;

    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email,
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email,
        };
      } else if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}{" "}
      </h1>{" "}
      <p> {contact.email} </p>{" "}
      <form>
        <input
          onChange={contactChanger}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />{" "}
        <input
          onChange={contactChanger}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />{" "}
        <input
          onChange={contactChanger}
          name="email"
          placeholder="Email"
          value={contact.email}
        />{" "}
        <button> Submit </button>{" "}
      </form>{" "}
    </div>
  );
}

export default App;
