function Bottom({
  itens,
  deleteCompleted,
  showOnlyCompleted,
  showUndone,
  showAll,
}) {
  return (
    <div className="flex mb-3 justify-between gap-12 text-xs p-1 text-slate-600 w-full font-medium">
      <div className="  "> {itens} Items Left</div>
      <div className="flex items-center justify-around w-1/3">
        <div>
          <input
            type="radio"
            name="tasksRadio"
            id="TaskAll"
            defaultChecked
            className="sr-only peer"
            onClick={showAll}
          />
          <label
            htmlFor="TaskAll"
            className="peer-checked:font-extrabold peer-checked:text-white cursor-pointer"
          >
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="tasksRadio"
            id="TaskActive"
            className="sr-only peer"
            onClick={showUndone}
          />
          <label
            htmlFor="TaskActive"
            className="peer-checked:font-extrabold peer-checked:text-white cursor-pointer"
          >
            Active
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="tasksRadio"
            id="TaskComplete"
            className="sr-only peer"
          />

          <label
            htmlFor="TaskComplete"
            className="peer-checked:font-extrabold peer-checked:text-white cursor-pointer"
            onClick={showOnlyCompleted}
          >
            Completed
          </label>
        </div>
      </div>
      <div
        className=" hover:text-white cursor-pointer"
        onClick={deleteCompleted}
      >
        {" "}
        Clear Completed
      </div>
    </div>
  );
}

export default Bottom;
