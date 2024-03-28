import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({ username: "", mobile: "" });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username === "") {
      setError({ username: "Enter Your Username" });
    } else if (user.username.length <= 2 || user.username.length > 9) {
      setError({ username: "username Must be Between 3 and 9" });
    }

    if (user.mobile === "") {
      setError({ mobile: "Please Enter Your Mobile Number" });
    } else if(isNaN(user.mobile)){
      setError({mobile:"Enter Digit Only"})
    }
  };

  return (
    <>
      <div>
        <h1>Welcome to SignUp section</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Your UserName"
            name="username"
            onChange={handleChange}
            value={user.user}
            autoComplete="off"
          />
          <span style={{ color: "red" }}> {error.username}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter yoour Number"
            name="mobile"
            onChange={handleChange}
            value={user.mobile}
            autoComplete="off"
          />
          <span style={{color:"red"}}>{error.mobile} </span>
        </div>
        <button className="SignUpButton" type="submit">
          SignUp
        </button>
      </form>
    </>
  );
};

export default SignUp;
ahsan1234