import React, { useEffect, useState } from "react";
import "./static/css/home-style.css";
import "./static/javascript/home-script.js";
import axios from "axios";

export default function Home(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function getUserDate(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function sendRegisterData() {
    try {
      var response = await axios.post(`${props.BASE_URL}/api/buyers/`, user, {
        headers: props.HEADERS,
      });

      let alertDom = document.getElementById("register-alert");
      alertDom.classList = "";
      alertDom.classList += "alert active success";
      alertDom.innerHTML = "Your Account Created Successfully!";

      Array.from(document.getElementsByTagName("form")).forEach((form) => {
        form.reset();
      });
    } catch (error) {
      let alertDom = document.getElementById("register-alert");
      alertDom.classList = "";
      alertDom.classList += "alert active failed";
      alertDom.innerHTML = error.response.data.email[0];
    }
  }

  function submitRegisterForm(e) {
    e.preventDefault();
    sendRegisterData();
  }

  function submitLoginForm(e) {
    e.preventDefault();
    sendLoginData();
  }
  async function sendLoginData(e) {
    let myuser = {
      email: user.email,
      password: user.password,
    };
    try {
      var response = await axios.post(`${props.BASE_URL}/token/`, myuser);

      let alertDom = document.getElementById("login-alert");
      alertDom.classList = "";
      alertDom.classList += "alert active success";
      alertDom.innerHTML = "Logged In Successfully!";

      Array.from(document.getElementsByTagName("form")).forEach((form) => {
        form.reset();
      });
    } catch (error) {
      let alertDom = document.getElementById("login-alert");
      alertDom.classList = "";
      alertDom.classList += "alert active failed";
      alertDom.innerHTML = "Your Password Or Email In Incorrect!";
    }
  }

  function javascript() {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form onSubmit={submitRegisterForm}>
            <span id="register-alert" className="alert">
              Account Create Successfully!
            </span>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"></a>{" "}
              <a href="#" className="icon"></a>
              <a href="#" className="icon"></a>{" "}
              <a href="#" className="icon"></a>
            </div>
            <span>or use your email for registeration</span>
            <input
              type="name"
              name="name"
              placeholder="Name"
              onChange={getUserDate}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={getUserDate}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={getUserDate}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={submitLoginForm}>
            <span id="login-alert" className="alert"></span>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"></a>{" "}
              <a href="#" className="icon"></a>
              <a href="#" className="icon"></a>{" "}
              <a href="#" className="icon"></a>
            </div>
            <span>or use your email password</span>
            <input
              id="login-email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={getUserDate}
            />
            <input
              id="login-password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={getUserDate}
            />
            <a href="#">Forget Your Password?</a> <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login-toggle-form">
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button className="hidden" id="register-toggle-form">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
