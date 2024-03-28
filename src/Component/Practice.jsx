import React, { useState } from "react";

const Practice = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const NewError = {};
    if (user.username === "") {
      //   setError({ username: "Enter Your Username" });
      NewError.username = "Enter Your UserName";
    } else if (user.username.length <= 2 || user.username.length > 10) {
      NewError.username = "Password Must be Betweeen 3 and 10";
    }

    if (user.email === "") {
      NewError.email = "Enter Your Email";
    }
    if (user.mobile === "") {
      //   setError({ mobile: "Enter Your Mobile Number" });
      NewError.mobile = "Enter Your Mobile Number";
    } else if (isNaN(user.mobile)) {
      //   setError({ mobile: "Enter Digit Only" });
      NewError.mobile = "Enter Digit Only";
    }

    if (user.password === "") {
      NewError.password = "Enter Password";
    }
    if (user.password !== user.confirmPassword) {
      NewError.confirmPassword = "Password Not Match";
    }
    setError(NewError);
    if (Object.keys(NewError).length === 0) {
      setFlag(true);
    }
  }
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <>
        <h1>
          {flag ? (
            <p>{user.username} "you have registered Successfully"</p>
          ) : (
            ""
          )}
        </h1>
        <div>
          <h1>SignUp form Validation</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter Your UserName"
                name="username"
                onChange={handleChange}
                value={user.username}
                autoComplete="off"
              />
              <br />
              <span style={{ color: "red" }}>{error.username}</span>
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={handleChange}
                value={user.email}
                autoComplete="off"
              />
              <br />
              <span style={{ color: "red" }}>{error.email}</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                name="mobile"
                onChange={handleChange}
                value={user.mobile}
                autoComplete="off"
              />
              <br />
              <span style={{ color: "red" }}>{error.mobile}</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Your Password"
                name="password"
                onChange={handleChange}
                value={user.password}
                autoComplete="off"
              />
              <br />
              <span style={{ color: "red" }}>{error.password}</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Your Password Again"
                name="confirmPassword"
                onChange={handleChange}
                value={user.confirmPassword}
                autoComplete="off"
              />{" "}
              <br />
              <span style={{ color: "red" }}>{error.confirmPassword}</span>
            </div>
            <br />
            <button>SignUp</button>
          </form>
        </div>
      </>
    </div>
  );
};

export default Practice;
