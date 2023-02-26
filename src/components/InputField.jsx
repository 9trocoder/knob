import React from "react";

function InputField({ label, type, placeholder, inputIcon }) {
  return (
    <div className="inputfieldcnt">
      <label>{label}</label>
      <div className="dinput">
        <input type={type} placeholder={placeholder} />
        <div className="inputicon">{inputIcon}</div>
      </div>
    </div>
  );
}

export default InputField;
