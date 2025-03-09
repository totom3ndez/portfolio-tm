import React from "react";

const NewInput = ({ type, name, label, style, value, onChange }) => {
  return (
    <div className={`input_group  ${style}`}>
      <input
        required
        type={type}
        name={name}
        autoComplete="off"
        className="input"
        value={value}
        onChange={onChange}
        minLength={3}
      />
      <label htmlFor={name} className="user-label">
        {label}
      </label>
    </div>
  );
};

export default NewInput;
