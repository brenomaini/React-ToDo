import React from "react";
import Bottom from "./Bottom";
import ItemTarefa from "./ItemTarefa";

function List(props) {
  return (
    <div className="flex  flex-col rounded-lg justify-center items-center w-1/3  bg-slate-100 dark:bg-slate-800 max-sm:text-base max-sm:w-full ">
      <ul className="flex flex-col rounded-lg justify-center items-center w-full">
        {props.listaTarefas.map((tarefa) => {
          return (
            <ItemTarefa
              key={tarefa.id}
              tarefa={tarefa}
              onDone={props.onDone}
              onItemDeleted={props.onItemDeleted}
            ></ItemTarefa>
          );
        })}
      </ul>
      <Bottom
        listaTarefas={props.listaTarefas}
        onFilter={props.onFilter}
        onDeleteAll={props.onDeleteAll}
      ></Bottom>
    </div>
  );
}

export default List;
