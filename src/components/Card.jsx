import { useRef } from "react";
import Input from "./Input";
import RoundCheckBoxItem from "./RoundCheckBoxItem";

function Card(props) {
  const itemDone = useRef();
  return (
    <li
      id={props.text}
      className="flex items-center justify-between gap-2 w-full p-4 border-b border-b-slate-700 dark:text-slate-300"
    >
      <div className="w-full flex items-center gap-4">
        <Input name={props.name} itemDone={itemDone} />
        <RoundCheckBoxItem name={props.name} isDone={isDone} />
        {props.text}
      </div>
      <button
        onClick={() => {
          props.deleteItem(props.text);
        }}
      >
        <img src="./images/icon-cross.svg" className="hover:opacity-30" />
      </button>
    </li>
  );
  function isDone() {
    !itemDone.current.checked
      ? props.setTarefaDone(props.text)
      : props.setTarefaUndone(props.text);
  }
}

export default Card;
