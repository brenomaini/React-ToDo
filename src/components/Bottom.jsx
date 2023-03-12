import React from "react";

function Bottom(props) {
  function CountDone() {
    let count = props.listaTarefas.filter((tarefa) => tarefa.done == false);
    return <div>{count.length} Itens Left</div>;
  }
  return (
    <div className="flex items-center justify-between w-full p-4 text-slate-600 font-medium max-sm:text-xs">
      <CountDone />
      <div className="flex items-center justify-between gap-4 m-4">
        <div>
          <input
            type="radio"
            name="itemToShow"
            id="All"
            hidden
            defaultChecked
            className="peer"
          />
          <label
            htmlFor="All"
            className="hover:text-white cursor-pointer peer-checked:text-blue-500"
            onClick={() => props.onFilter("All")}
          >
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="itemToShow"
            id="Active"
            hidden
            className="peer"
          />
          <label
            htmlFor="Active"
            className="hover:text-white cursor-pointer peer-checked:text-blue-500"
            onClick={() => props.onFilter("Active")}
          >
            Active
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="itemToShow"
            id="Completed"
            hidden
            className="peer"
          />
          <label
            htmlFor="Completed"
            className="hover:text-white cursor-pointer peer-checked:text-blue-500"
            onClick={() => props.onFilter("Completed")}
          >
            Completed
          </label>
        </div>
      </div>

      <div
        className="hover:text-white cursor-pointer"
        onClick={() => {
          props.onDeleteAll();
        }}
      >
        Clear Completed
      </div>
    </div>
  );
}

export default Bottom;
