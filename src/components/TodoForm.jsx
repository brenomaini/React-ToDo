import React, { useState } from "react";

function TodoForm(props) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    let text = event.target.value;
    setItem(text);
  }

  function addTarefa(e) {
    e.preventDefault();
    if (item) {
      props.onAddItem(item);
      setItem("");
    }
  }

  return (
    <form className="flex justify-center items-center text-lg gap-2 w-1/3 max-sm:w-2/3 bg-slate-100 dark:bg-slate-800 shadow-md p-2 rounded-md">
      <button
        onClick={addTarefa}
        className="rounded-full  bg-slate-100 border border-slate-300 w-6 h-6 hover:border-indigo-700 hover:border-2 cursor-pointer dark:bg-slate-800  dark:border-slate-600"
      ></button>
      <input
        placeholder="Type here"
        type="text"
        onChange={handleChange}
        value={item}
        className="bg-slate-100 text-slate-800 dark:text-slate-300 w-3/4 max-sm:text-base max-sm:w-full dark:bg-slate-800"
      ></input>
    </form>
  );
}

export default TodoForm;
