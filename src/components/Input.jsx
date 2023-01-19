import React from "react";

function Input({ name }) {
  return <input type="checkbox" className={`peer sr-only`} id={name} />;
}

export default Input;
