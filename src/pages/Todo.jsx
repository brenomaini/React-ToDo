import { useEffect, useState } from "react";
import Header from "../components/Header";
import Item from "../components/Item";
import List from "../components/List";
import TodoForm from "../components/TodoForm";

function Todo() {
  const [listaTarefas, setLista] = useState(
    JSON.parse(localStorage.getItem("savedItems")) || []
  );
  function onAddItem(text) {
    let it = new Item(text);
    setLista([...listaTarefas, it]);
  }
  function onItemDeleted(item) {
    let filteredItems = listaTarefas.filter((tarefa) => tarefa.id != item.id);
    setLista(filteredItems);
  }
  function onDone(item) {
    let updatedItems = listaTarefas.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setLista(updatedItems);
  }

  function onFilter(filter) {
    let updatedItems;
    if (filter == "All") {
      updatedItems = listaTarefas.map((it) => {
        it.show = true;
        return it;
      });
      setLista(updatedItems);
    }
    if (filter == "Active") {
      updatedItems = listaTarefas.map((it) => {
        if (it.done == true) {
          it.show = false;
          return it;
        } else {
          it.show = true;
          return it;
        }
      });
      setLista(updatedItems);
    }
    if (filter == "Completed") {
      updatedItems = listaTarefas.map((it) => {
        if (it.done == true) {
          it.show = true;
          return it;
        } else {
          it.show = false;
          return it;
        }
      });
      setLista(updatedItems);
    }
  }
  function onDeleteAll() {
    let filteredItems = listaTarefas.filter((tarefa) => tarefa.done == false);
    setLista(filteredItems);
  }

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(listaTarefas));
  }, [listaTarefas]);

  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center gap-4 h-full w-full min-h-screen bg-slate-200 dark:bg-slate-900">
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List
          listaTarefas={listaTarefas}
          onItemDeleted={onItemDeleted}
          onDone={onDone}
          onFilter={onFilter}
          onDeleteAll={onDeleteAll}
        ></List>
      </div>
    </>
  );
}

export default Todo;
