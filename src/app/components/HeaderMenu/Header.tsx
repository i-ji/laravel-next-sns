import React from "react";
import Top from "./Top";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="max-w-[638px] fixed w-full top-0 left-0 sm:left-[calc(50%_-_319px)] pt-3 bg-white">
      <Top />
      <Menu />
    </header>
  );
};

export default Header;
