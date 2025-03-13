import React from "react";
import { useStore } from "../store/store";

const NewInput = ({ type, name, label, style, value, onChange }) => {
  const dark = useStore((state) => state.dark);

  return (
    <div className={`input_group ${style}`}>
      <input
        required
        type={type}
        name={name}
        autoComplete="off"
        className="input rounded-full"
        value={value}
        onChange={onChange}
        minLength={3}
      />
      <label
        htmlFor={name}
        className={`${
          dark ? "bg-dark p-2" : "p-2 bg-zinc-100 text-dark"
        } user-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default NewInput;
