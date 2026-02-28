"use client";
import React, { useState } from "react";

import { Link } from "gatsby";
import { navItems } from "@/data/navItems";

import useStore from "@/store/useStore";
import MegaMenu from "@/components/common/MegaMenu/MegaMenu";
import { useLocation } from "@reach/router";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
interface NavItem {
  id: number;
  title: string;
  link?: string;
  subMenu?: NavItem[];
}

export const getUpcomingMonths = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonthIndex = new Date().getMonth(); // 0 for Jan, 1 for Feb, etc.

  // Slice from current month to the end of the year
  return months.slice(currentMonthIndex).map((month, index) => ({
    id: 100 + index, // Unique ID
    title: month,
    link: `/upcoming/${month.toLowerCase()}`,
  }));
};
const HeaderInner: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMegaMenu, setIsMegaMenu] = useState<boolean>(false);
  const { changeSearchPopupStatus, changeMobileDrawerTwoStatus } = useStore();
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
    changeMobileDrawerTwoStatus();
    console.log("clicked");
  };

  const current =
    pathname.includes("/destination-two") ||
    pathname.includes("/destination-two");
  console.log(current);

  return (
    <header className="main-header main-header--two sticky-header sticky-header--normal">
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="main-header__inner">
          <div className="main-header__logo logo-retina">
            <Link to="/">
              <DynamicImage src="logo-dark.png" alt="gotur" />
            </Link>
          </div>

          <nav className="main-header__nav main-menu">
            <ul className="main-menu__list">
              {/* Render Home menu with showcase */}
              {/* <li
                className={`megamenu megamenu-clickable ${
                  pathname === "/" ? "current" : ""
                }`}
              >
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMegaMenu(!isMegaMenu);
                  }}
                >
                  Demos
                </Link>
                <MegaMenu
                  setIsMegaMenu={setIsMegaMenu}
                  isMegamenu={isMegaMenu}
                />
              </li> */}

              {navItems.map((item: NavItem) => (
                <li
                  className={`${item.subMenu ? "dropdown" : ""} ${
                    item.link && pathname.includes(item.link) ? "current" : ""
                  }`}
                  key={item.id}
                >
                  <Link to={item.link || "#"}>{item.title}</Link>
                  {item.subMenu && renderSubMenu(item.subMenu)}
                </li>
              ))}
              <li className="dropdown">
                <Link to="#">Upcoming Tours</Link>
                {renderSubMenu(getUpcomingMonths())}
              </li>
            </ul>
          </nav>
          <div className="main-header__right">
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

            <Link to="contact" className="gotur-btn main-header__btn">
              Get in touch <i className="icon-paper-plane"></i>
            </Link>
            <div className="main-header__call">
              <div className="main-header__call__icon">
                <i className="icon-telephone"></i>
              </div>
              <div className="main-header__call__content">
                <span className="main-header__call__subtitle">Call Us Now</span>
                <Link to="tel:+91 9711010190">+91 9711010190</Link>
              </div>
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

          {/* <div
            className="main-header__btn-popup main-header__element__btn"
            // onClick={changeSideBarDrawerStatus}
          >
            <i className="icon-menu-bar"></i>
          </div>

          <Link to="contact" className="gotur-btn main-header__btn">
            Get in touch <i className="icon-paper-plane"></i>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderInner;
