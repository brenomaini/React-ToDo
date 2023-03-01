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
  const [doneTasks, setTaskDone] = useState([]);
  const [undoneTasks, setTaskUndone] = useState([]);
  const [holding, setToHold] = useState([]);

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(listaTarefas));
  }, [listaTarefas]);

  function handleChange(event) {
    let text = event.target.value;
    setTarefa(text);
  }
  function handleKeyPress(e) {
    e.key === "Enter" ? addTarefa() : null;
  }

  function addTarefa() {
    if (tarefa) {
      setLista([...listaTarefas, tarefa]);
      setTarefa("");
    }
  }
  function setTarefaDone(item) {
    setTaskDone([...doneTasks, item]);
  }

  function setTarefaUndone(item) {
    let tarefaFiltrada = doneTasks.filter((tarefa) => tarefa != item);
    setTaskDone(tarefaFiltrada);
  }
  function deleteItem(item) {
    let tarefaFiltrada = listaTarefas.filter((tarefa) => tarefa != item);
    setLista(tarefaFiltrada);
  }
  function deleteCompleted() {
    let tarefaFiltrada = listaTarefas.filter((e) => !doneTasks.includes(e));
    setLista(tarefaFiltrada);
    setTaskDone([]);
  }
  function showAll() {
    if (holding == "") {
      return;
    } else {
      setLista(holding);
      setToHold([]);
    }
  }
  function showOnlyCompleted() {
    if (holding != "") {
      setLista(doneTasks);
      return;
    } else {
      setToHold(listaTarefas);
      setLista(doneTasks);
    }
  }
  function showUndone() {
    let tarefaFiltrada;
    if (holding != "") {
      tarefaFiltrada = holding.filter((e) => !doneTasks.includes(e));
      setLista(tarefaFiltrada);
    } else {
      tarefaFiltrada = listaTarefas.filter((e) => !doneTasks.includes(e));
      setToHold(listaTarefas);
      setLista(tarefaFiltrada);
    }
  }

  return (
    <div className=" bg-slate-200 container flex flex-col h-screen w-full dark:bg-slate-800  text-center justify-start items-center">
      <Header />
      <div className="flex items-center justify-between w-1/4 absolute top-24 gap-8  max-sm:w-full max-sm:justify-evenly ">
        <h1 className="text-white text-4xl font-bold tracking-widest max-sm:text-2xl max-sm:tracking-wide">
          T O D O
        </h1>
        <ThemeSelector />
      </div>
      <div className="flex flex-col h-1/2 w-full absolute top-1/3 items-center gap-6">
        <div className="text-lg rounded-md p-2 w-1/3  shadow-md flex aling-center gap-4 items-center pl-4  bg-slate-100 max-sm:text-base max-sm:w-3/4 dark:bg-slate-800">
          <RoundCheckBox text="task" addTarefa={addTarefa} />
          <input
            type="text"
            id="caixa"
            placeholder="Digite a tarefa..."
            onChange={handleChange}
            value={tarefa}
            className="bg-slate-100 text-slate-800 dark:text-slate-300 w-3/4 max-sm:text-base max-sm:w-3/4 dark:bg-slate-800"
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="shadow-md flex flex-col items-center justify-between font-semibold text-slate-600 bg-slate-100 gap-4 w-1/3  rounded-md max-sm:text-base max-sm:w-3/4 min-h-[30%] dark:bg-slate-800">
          <ul className="flex flex-col w-full max-sm:text-base">
            {listaTarefas.map((tarefa, index) => (
              <Card
                text={tarefa}
                key={index}
                name={index}
                deleteItem={deleteItem}
                setTarefaDone={setTarefaDone}
                setTarefaUndone={setTarefaUndone}
              />
            ))}
          </ul>
          <Bottom
            itens={listaTarefas.length - doneTasks.length}
            deleteCompleted={deleteCompleted}
            showOnlyCompleted={showOnlyCompleted}
            showUndone={showUndone}
            showAll={showAll}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
