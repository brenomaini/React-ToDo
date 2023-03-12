import React from "react";

function ItemTarefa(props) {
  function DoneImg(props) {
    if (props.done) {
      return (
        <div className="bg-gradient-to-b from-sky-500 to-indigo-500 rounded-full flex items-center w-full h-full justify-center">
          <img src="./images/icon-check.svg" alt="done"></img>
        </div>
      );
    } else {
      return;
    }
  }
  return (
    <li
      key={props.tarefa.id}
      className={`list-group-item ${
        props.tarefa.done
          ? "shadow-md flex rounded-md items-center justify-between gap-4 w-full p-4 border-b bg-slate-100 line-through font-semibold border-b-slate-700 dark:text-slate-400 dark:bg-slate-800"
          : "shadow-md flex rounded-md items-center justify-between gap-4 w-full p-4 border-b bg-slate-100 font-semibold border-b-slate-700 dark:text-slate-300 dark:bg-slate-800"
      } + ${props.tarefa.show === true ? "" : "hidden"}`}
    >
      <button
        onClick={() => {
          props.onDone(props.tarefa);
        }}
        className={
          props.tarefa.done
            ? "rounded-full flex items-center justify-center bg-slate-100 border-2 border-slate-300 w-6 h-6 hover:border-indigo-700 hover:border-2 cursor-pointer dark:bg-slate-800  dark:border-slate-600"
            : "rounded-full flex items-center justify-center bg-slate-100 border border-slate-300 w-6 h-6 hover:border-indigo-700 hover:border-2 cursor-pointer dark:bg-slate-800  dark:border-slate-600"
        }
      >
        <DoneImg done={props.tarefa.done} />
      </button>
      {props.tarefa.text}
      <div>
        <button
          onClick={() => {
            props.onItemDeleted(props.tarefa);
          }}
        >
          <img src="./images/icon-cross.svg" alt="delete"></img>
        </button>
      </div>
    </li>
  );
}

export default ItemTarefa;
