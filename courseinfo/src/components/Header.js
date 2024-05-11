import React from "react";

const Header = ({ title, el }) => {
  if (!el) {
    return <h1>{title}</h1>;
  }
  return <h2>{title}</h2>;
};

export default Header;
