"use client";
import React, { useState } from "react";

import { Link } from "gatsby"; // Assuming we're using Next.js for routing
import { navItems, headerTwoNavItems } from "@/data/navItems"; // Import the navItems data
import DemoPages from "@/components/common/DemoPages/DemoPages";
// import main_logo from "@/assets/images/logo-dark.png";

import useStore from "@/store/useStore";
import useScrollUp from "@/hooks/useScrollUp";
import MegaMenu from "@/components/common/MegaMenu/MegaMenu";
import { useLocation } from "@reach/router";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";
import { getUpcomingMonths } from "../HeaderInner/HeaderInner";
interface NavItem {
  id: number;
  title: string;
  link?: string;
  subMenu?: NavItem[];
}

const HeaderInnerCloned: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMegaMenu, setIsMegaMenu] = useState<boolean>(false);
  const scrollToTop = useScrollUp(500);
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
  const nav = pathname === "/home2-one" ? headerTwoNavItems : navItems;
  return (
    <header
      className={`main-header main-header--two sticky-header sticky-header--normal sticky-header--cloned ${
        scrollToTop ? " active" : ""
      }`}
    >
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
                  to='#'
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
              <li className="dropdown">
                <Link to="#">Upcoming Tours</Link>
                {renderSubMenu(getUpcomingMonths())}
              </li>
            </ul>
          </nav>
          <div className="main-header__right">
            {/* <div className='main-header__info'>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  changeSearchPopupStatus();
                }}
                to='#'
                className='search-toggler main-header__info__item'
              >
                <i
                  className='icon-search-interface-symbol'
                  aria-hidden='true'
                ></i>
                <span className='sr-only'>Search</span>
              </Link>
              <Link to='cart' className='main-header__info__item'>
                <i className='icon-shopping-carts' aria-hidden='true'></i>
                <span className='sr-only'>Cart</span>
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

          {/*  
             <div className="main-header__btn-popup main-header__element__btn" onClick={changeSideBarDrawerStatus}>
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

export default HeaderInnerCloned;
