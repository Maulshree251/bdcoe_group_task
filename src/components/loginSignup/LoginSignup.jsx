import React, { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";



function LoginSignup({isLighttheme}) {
  const [action, setAction] = useState("Login");
  const [fullname, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate;

  function signup(e) {
    // e.preventDefault();

    fetch("https://bdcoetask2.vercel.app/api/v1/users/register", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password, username }),
    })
      .then((response) => {
        return response.text().then((text) => (text ? JSON.parse(text) : {}));
      })
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("user", JSON.stringify(data)); //data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function login(e) {
    // e.preventDefault();

    fetch("https://bdcoetask2.vercel.app/api/v1/users/login", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.text().then((text) => (text ? JSON.parse(text) : {}));
      })
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("user", JSON.stringify(data)); //data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={isLighttheme? "container white" : "container"}>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <>
            <div className="input">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'%3E%3C/path%3E%3C/svg%3E"
                alt=""
              />
              <input
                type="text"
                name=""
                id="fullname"
                placeholder="Enter full name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z'%3E%3C/path%3E%3C/svg%3E"
                alt=""
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </>
        )}

        <div className="input">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'%3E%3C/path%3E%3C/svg%3E"
            alt=""
          />
          <input
            type="text"
            name=""
            id="username"
            placeholder="Enter username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="input">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z'%3E%3C/path%3E%3C/svg%3E"
            alt=""
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {action === "Sign Up" ? ( //onClick={signup}
          <div className="permanentSubmit">
            <input type="submit" value="Submit" onClick={signup} />
          </div>
        ) : (
          <div className="permanentSubmit">
            <input type="submit" value="Click here to Login" onClick={login} />
          </div>
        )}

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot password?<a href="">click here!</a>
          </div>
        )}

        <div className="submit-container">
          <div className={action === "Sign Up" ? "submit grey" : "submit"}>
            <input
              type="submit"
              value="Sign Up"
              className="signup-login"
              onClick={() => {
                setAction("Sign Up");
              }}
            />
          </div>
          <div
            className={action === "Login" ? "submit grey" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            <input type="submit" value="Login" className="signup-login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
