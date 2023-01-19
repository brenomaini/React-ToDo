function Bottom() {
  return (
    <div className="flex mb-3 justify-between gap-12 text-xs p-1 text-slate-600 w-full font-medium">
      <div className="  "> ** Items Left</div>
      <div className="flex items-center justify-around w-1/3">
        <a href="">All</a>
        <a href="">Active</a>
        <a href="">Completed</a>
      </div>
      <div className="">Clear Completed</div>
    </div>
  );
}

export default Bottom;
