import React, { useState } from "react";

function RoundCheckBox({ name }) {
  const [imgSRC, setSrc] = useState("");
  let srcCheck = "./images/icon-check.svg";
  return (
    <>
      <label
        htmlFor={name}
        className="rounded-full flex justify-center items-center bg-slate-800 border border-slate-600 w-6 h-6 hover:border-indigo-700 hover:border-2 cursor-pointer peer-checked:bg-gradient-to-b from-sky-500 to-indigo-500"
        onClick={srcSet}
      >
        <img src={imgSRC} />
      </label>
    </>
  );

  function srcSet() {
    if (imgSRC == "") {
      setSrc(srcCheck);
    } else {
      setSrc("");
    }
  }
}
RoundCheckBox.defaultProps = { addTarefa: "" };

export default RoundCheckBox;
