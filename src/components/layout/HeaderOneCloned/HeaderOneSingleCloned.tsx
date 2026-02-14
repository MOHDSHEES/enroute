"use client";
import React, { useContext } from "react";

import { Link } from "gatsby"; // Assuming we're using Next.js for routing
import { navItems, headerOneNavItems } from "@/data/navItems"; // Import the navItems data
import DemoPages from "@/components/common/DemoPages/DemoPages";

import useStore from "@/store/useStore";
import useScrollUp from "@/hooks/useScrollUp";
import SingleNavItems from "../SingleNavItems/SingleNavItems";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import { useLocation } from "@reach/router";
import { ThemeContext } from "@/provider/ThemeProvider";
interface NavItem {
  id: number;
  title: string;
  link?: string;
  subMenu?: NavItem[];
}

const HeaderOneSingleCloned: React.FC = () => {
  const scrollToTop = useScrollUp(500);
  const location = useLocation();
  const { toggleSidebar } = useContext(ThemeContext);
  const pathname = location.pathname;
  const {
    changeSearchPopupStatus,
    changeMobileDrawerStatus,
    changeSideBarDrawerStatus,
  } = useStore();
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
    pathname === "/home1-one/" || pathname === "/home3-one/"
      ? headerOneNavItems
      : navItems;
  return (
    <header
      className={`main-header main-header--one sticky-header sticky-header--normal sticky-header--cloned ${
        scrollToTop ? " active" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="main-header__inner">
          <div className="main-header__logo logo-retina">
            <Link to="/">
              <DynamicImage src="logo-dark.png" alt="gotur" />
            </Link>
          </div>

          <div className="main-header__right">
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                {/* Render Home menu with showcase */}
                <li className="dropdown megamenu">
                  <Link to="/">Home</Link>
                  <DemoPages />
                </li>

                {nav.map((item: NavItem) => (
                  <SingleNavItems item={item} key={item.id} />
                ))}
              </ul>
            </nav>

            <div className="main-header__info">
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
              <Link to="cart.html" className="main-header__info__item">
                <i className="icon-shopping-carts" aria-hidden="true"></i>
                <span className="sr-only">Cart</span>
              </Link>
            </div>

            <div
              className="main-header__btn-popup main-header__element__btn"
              onClick={toggleSidebar}
            >
              <i className="icon-menu-bar"></i>
            </div>

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

export default HeaderOneSingleCloned;
