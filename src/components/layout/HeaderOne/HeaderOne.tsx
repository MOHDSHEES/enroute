"use client";
import React, { useContext } from "react";
import { Link } from "gatsby"; // Assuming we're using Next.js for routing
import { navItems, headerOneNavItems } from "@/data/navItems"; // Import the navItems data
import DemoPages from "@/components/common/DemoPages/DemoPages";
import { useLocation } from "@reach/router";
import useStore from "@/store/useStore";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import { ThemeContext } from "@/provider/ThemeProvider";

interface NavItem {
  id: number;
  title: string;
  link?: string;
  subMenu?: NavItem[];
}

const HeaderOne: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { toggleSidebar } = useContext(ThemeContext);
  const { changeSearchPopupStatus, changeMobileDrawerStatus } = useStore();
  const renderSubMenu = (subMenu: NavItem[]) => (
    <ul className="">
      {subMenu.map((item: any, index: number) => (
        <li key={index} className={item.subMenu ? "dropdown" : ""}>
          <Link to={item.link}>{item.title}</Link>
          {item.subMenu && renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );
  const handelClick = () => {
    changeMobileDrawerStatus();
    console.log("clicked");
  };

  const nav =
    pathname === "/home1-one" || pathname === "/home3-one"
      ? headerOneNavItems
      : navItems;
  return (
    <header className="main-header main-header--one sticky-header sticky-header--normal">
      <div className="container-fluid">
        <div className="main-header__inner">
          <div
            className="main-header__logo logo-retina"
            style={{ width: "160px" }}
          >
            <Link to="/">
              {/* <img src='./images/logo-dark.png' alt='A dinosaur' width={160} /> */}
              <DynamicImage src="logo-dark.png" alt="gotur" />
            </Link>
          </div>

          <div className="main-header__right">
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                {/* Render Home menu with showcase */}
                {/* <li className='dropdown megamenu'>
                  <Link to='/'>Home</Link>
                  <DemoPages />
                </li> */}

                {nav.map((item: NavItem) => (
                  <li
                    className={`${item.subMenu ? "dropdown" : ""} ${
                      pathname === item.link ? "current" : ""
                    }`}
                    key={item.id}
                  >
                    <Link to={item.link || "#"}>{item.title}</Link>
                    {item.subMenu && renderSubMenu(item.subMenu)}
                  </li>
                ))}
              </ul>
            </nav>

            {/* <div className="main-header__info">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  changeSearchPopupStatus();
                }}
                to="#"
                className="search-toggler main-header__info__item"
              >
                <i
                  className="icon-search-interface-symbol"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Search</span>
              </Link>
              <Link to="cart" className="main-header__info__item">
                <i className="icon-shopping-carts" aria-hidden="true"></i>
                <span className="sr-only">Cart</span>
              </Link>
            </div> */}

            {/* <div
              className="main-header__btn-popup main-header__element__btn"
              onClick={toggleSidebar}
            >
              <i className="icon-menu-bar"></i>
            </div> */}

            <Link to="contact" className="gotur-btn main-header__btn">
              Get in touch <i className="icon-paper-plane"></i>
            </Link>

            <div
              className="mobile-nav__btn mobile-nav__toggler"
              onClick={handelClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
