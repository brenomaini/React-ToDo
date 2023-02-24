import React from "react";

function Input({ name, itemDone }) {
  return (
    <input
      type="checkbox"
      className={`peer sr-only`}
      id={name}
      ref={itemDone}
    />
  );
}

export default Input;
