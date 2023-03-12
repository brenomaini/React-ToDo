import React from "react";
function Header() {
  return (
    <header className=" bg-[url('./images/bg-desktop-light.jpg')] bg-cover h-80 w-full dark:bg-[url('./images/bg-desktop-dark.jpg')] flex items-center justify-center gap-64">
      <h1 className="text-white text-4xl font-bold tracking-wide max-sm:text-2xl max-sm:tracking-wide">
        TO DO
      </h1>
      <div className="bg-auto min-w-[26px] min-h-[26px] bg-no-repeat bg-center bg-[url('/images/icon-sun.svg')] dark:bg-[url('/images/icon-moon.svg')]"></div>
    </header>
  );
}

export default Header;
