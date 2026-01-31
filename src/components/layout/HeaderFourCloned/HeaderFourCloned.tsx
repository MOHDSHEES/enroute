"use client";
import React, { useContext } from "react";
import { Link } from "gatsby"; // Assuming we're using Next.js for routing
import { navItems } from "@/data/navItems"; // Import the navItems data
import DemoPages from "@/components/common/DemoPages/DemoPages";
import useStore from "@/store/useStore";
import { Container } from "react-bootstrap";
import useScrollUp from "@/hooks/useScrollUp";
import { useLocation } from "@reach/router";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import { ThemeContext } from "@/provider/ThemeProvider";
interface NavItem {
  id: number;
  title: string;
  link?: string;
  subMenu?: NavItem[];
}

const HeaderFourCloned: React.FC = () => {
  const scrollToTop = useScrollUp(500);
  const location = useLocation();
  const pathname = location.pathname;
  const { toggleSidebar } = useContext(ThemeContext);
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
  return (
    <header
      className={`main-header main-header--four sticky-header sticky-header--normal sticky-header--cloned ${
        scrollToTop ? "active" : ""
      }`}
    >
      <Container fluid>
        <div className="main-header__inner">
          <div className="main-header__logo logo-retina">
            <Link to="/">
              <DynamicImage src="logo-light.webp" alt="gotur" />
            </Link>
          </div>
          <nav className="main-header__nav main-menu">
            <ul className="main-menu__list">
              {/* Render Home menu with showcase */}
              <li className="dropdown megamenu">
                <Link to="/">Home</Link>
                <DemoPages />
              </li>

              {/* Render other menus dynamically from navItems */}
              {/* {navItems.map((item: NavItem) => (
                  <li  className={`${item.subItems ? "dropdown" : ""} ${
                    pathname === item.href ? "current" : ""
                  }`}
                  key={item.id}>
                    <Link to={item.link}>
                      {item.title}
                    </Link>
                    {item.subItems && renderSubMenu(item.subItems)}
                  </li>
                ))} */}
              {navItems.map((item: NavItem) => (
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

          <div className="main-header__right">
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
              <Link to="cart" className="main-header__info__item">
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
      </Container>
    </header>
  );
};

export default HeaderFourCloned;
