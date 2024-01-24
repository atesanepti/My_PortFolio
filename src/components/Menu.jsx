import React, { useState } from "react";

const Menu = ({ value, to }) => {
  return (
    <li>
      <a
        href={to}
        className="navlink"
      >
        {value}
      </a>
    </li>
  );
};

export default Menu;
