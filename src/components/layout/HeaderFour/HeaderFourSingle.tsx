"use client";
import React, { useContext } from "react";

import { Link } from "gatsby";
import { headerFourNavItems } from "@/data/navItems";
import DemoPages from "@/components/common/DemoPages/DemoPages";

import useStore from "@/store/useStore";
import { Container } from "react-bootstrap";
import SingleNavItems from "../SingleNavItems/SingleNavItems";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import { ThemeContext } from "@/provider/ThemeProvider";
interface NavItem {
  id: number;
  title: string;
  link?: string;
  subMenu?: NavItem[];
}

const HeaderFourSingle: React.FC = () => {
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
    <header className="main-header main-header--four sticky-header sticky-header--normal">
      <Container fluid>
        <div className="main-header__inner">
          <div className="main-header__logo logo-retina">
            <Link to="/">
              <DynamicImage src="logo-light.png" alt="gotur" />
            </Link>
          </div>
          <nav className="main-header__nav main-menu">
            <ul className="main-menu__list">
              {/* Render Home menu with showcase */}
              <li className="dropdown megamenu">
                <Link to="/">Home</Link>
                <DemoPages />
              </li>

              {headerFourNavItems.map((item: NavItem) => (
                <SingleNavItems item={item} key={item.id} />
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

export default HeaderFourSingle;
