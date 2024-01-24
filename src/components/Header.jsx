import React, { useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import Menu from './Menu';

// Nav Menu Data 
const menuData = [
  {
    to: "#home",
    value: "Home",
  },
  {
    to: "#cv",
    value: "About",
  },
  {
    to: "#skill",
    value: "Skills",
  },
  {
    to: "#project",
    value: "Projects",
  },
  {
    to: "#contact",
    value: "Contact",
  },
];

const Header = () => {
  const [menuIsShow, setMenuIsShow] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(false);

  const [menuActive,setMenuActive] = useState(false)
  const handleMenuToggle = () => {
    setMenuIsShow((prevState) => !prevState);
  };
  const scrollDisable = () => {
    if (menuIsShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  useEffect(() => {
    scrollDisable(menuIsShow);
  }, [menuIsShow]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 680) {
        setIsHeaderShow(true);
      } else if (window.screenY < 680) {
        setIsHeaderShow(false);
      }
    });
  }, [1]);
  return (
    <header id="header" className={isHeaderShow ? "active" : null}>
      <div className="brand">
        <h4 className="brand_name">Epti</h4>
      </div>
      <nav className="navbar">
        <div className="nav_toggler" onClick={handleMenuToggle}>
          <IoIosMenu />
        </div>
        <div
          className={`black_overlly ${menuIsShow ? "active" : null}`}
          onClick={handleMenuToggle}
        ></div>
        <ul className={`navlist ${menuIsShow ? "active" : null}`}>
          <div
            className="nav_close_toggler nav_toggler"
            onClick={handleMenuToggle}
          >
            <IoMdClose />
          </div>
          {menuData.map((menu,index) => <Menu key={index} value={menu.value} to={menu.to} />)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
