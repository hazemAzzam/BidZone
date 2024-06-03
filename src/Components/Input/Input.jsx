import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./static/css/input-style.css";

export default function Input({ icon, type, name, placeholder, onChange }) {
  return (
    <>
      <div className="data">
        <FontAwesomeIcon icon={icon} className="icon" />
        <input
          className="data-input"
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
