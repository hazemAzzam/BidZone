import React, { useState } from "react";

import "./static/css/register-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Input from "../Input/Input";
import logo from "./static/images/BidZone-logo.png";
import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook";

import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  const headers = {
    "X-Api-Key": "P8Up2RQt.EyfwAeFQQ2GtxjFBLqip2RMmjha1Mb9k",
  };
  function getUserData(eventInfo) {
    let newUser = { ...user };
    newUser[eventInfo.target.name] = eventInfo.target.value;
    setUser(newUser);
  }
  async function sendRegisterdData() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/buyers/",
        user,
        {
          headers: headers,
        }
      );

      const statusCode = response.status;
      // Do something with the status code
      console.log("Status code:", statusCode);

      // If you also need the response data
      const responseData = response.data;
      // Do something with the response data
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  }

  function submitRegisterForm(e) {
    e.preventDefault();
    sendRegisterdData();
  }
  return (
    <>
      <div className="register">
        <div className="container">
          <form className="left" onSubmit={submitRegisterForm}>
            <FontAwesomeIcon
              icon={faCircleUser}
              className="user-icon"
              size="7x"
            />
            <div className="cred">
              <Input
                icon={faUser}
                type="text"
                name="name"
                placeholder="Username"
                onChange={getUserData}
              />
              <Input
                icon={faAt}
                type="text"
                name="email"
                placeholder="Email Address"
                onChange={getUserData}
              />
              <Input
                icon={faLock}
                type="password"
                name="password"
                placeholder="Password"
                onChange={getUserData}
              />
              <button type="submit" className="register-btn">
                Register
              </button>
            </div>
          </form>
          <div
            className="right"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          >
            <div className="container">
              <div className="content">
                <h1>Welcome.</h1>
                <p>
                  the ultimate platform for buying and selling through exciting
                  auctions. Discover unique items or sell your treasures to the
                  highest bidder. Join us today and start bidding!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
