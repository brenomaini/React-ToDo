import React, { useEffect, useState } from "react";
import Bottom from "../../components/Bottom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import RoundCheckBox from "../../components/RoundCheckBox";
import ThemeSelector from "../../components/ThemeSelector";

function Todo() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setLista] = useState(
    JSON.parse(localStorage.getItem("savedItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(listaTarefas));
  }, [listaTarefas]);

  function handleChange(event) {
    let text = event.target.value;
    setTarefa(text);
  }
  function addTarefa() {
    if (tarefa) {
      setLista([...listaTarefas, tarefa]);
      setTarefa("");
    }
  }

  function deleteItem(item) {
    let tarefaFiltrada = listaTarefas.filter((tarefa) => tarefa != item);

    setLista(tarefaFiltrada);
  }

  return (
    <div className="container flex flex-col h-screen text-center items-center bg-slate-900">
      <Header />
      <div className="flex items-center justify-between w-1/4 absolute top-24 gap-8  max-sm:w-full max-sm:justify-evenly">
        <h1 className="text-white text-4xl font-bold tracking-widest max-sm:text-2xl max-sm:tracking-wide">
          T O D O
        </h1>
        <ThemeSelector />
      </div>
      <div className="text-lg rounded-md p-2 w-1/4 shadow-md flex aling-center gap-4 items-center pl-4  absolute top-44 bg-slate-800 max-sm:text-base max-sm:w-3/4">
        <RoundCheckBox text="task" addTarefa={addTarefa} checked="" />
        <input
          type="text"
          id="caixa"
          placeholder="Digite a tarefa..."
          onChange={handleChange}
          value={tarefa}
          className="bg-slate-800 text-slate-300 max-sm:text-base max-sm:w-3/4"
        />
      </div>
      <div className=" flex flex-col justify-center items-center gap-4 w-1/4 absolute top-1/3 bg-slate-800 rounded-md max-sm:text-base max-sm:w-3/4">
        <ul className="flex flex-col w-full max-sm:text-base">
          {listaTarefas.map((tarefa, index) => (
            <Card
              text={tarefa}
              key={index}
              name={index}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
        <Bottom />
      </div>
    </div>
  );
}

export default Todo;
