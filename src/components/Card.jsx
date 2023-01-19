import Input from "./Input";
import RoundCheckBox from "./RoundCheckBox";

function Card(props) {
  return (
    <li
      id={props.text}
      className="flex items-center justify-between gap-2 w-full p-4 border-b border-b-slate-700 text-slate-300"
    >
      <div className="w-full flex items-center gap-4">
        <Input name={props.name} />
        <RoundCheckBox name={props.name} />
        {props.text}
      </div>
      <button
        onClick={() => {
          props.deleteItem(props.text);
        }}
      >
        <img src="./images/icon-cross.svg" />
      </button>
    </li>
  );
}

export default Card;