import React from "react";

function ThemeSelector({ srcURL }) {
  let theme;
  return (
    <button className="bg-auto min-w-[26px] min-h-[26px] bg-no-repeat bg-center bg-[url('/images/icon-sun.svg')] dark:bg-[url('/images/icon-moon.svg')]"></button>
  );

  function changeTheme() {}
}

export default ThemeSelector;
