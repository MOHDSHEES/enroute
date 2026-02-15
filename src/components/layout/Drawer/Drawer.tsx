"use client";
import React, { useState } from "react";
import useStore from "@/store/useStore";
import { Link } from "gatsby";
import { navItems } from "@/data/navItems";
import DynamicImage from "@/components/common/DynamicImage/DynamicImage";

interface SubMenu {
  id: number;
  title: string;
  link?: string;
  subMenu?: SubMenu[];
}

interface NavItem {
  id: number;
  title: string;
  link?: string;
  subMenu?: SubMenu[];
}

const Drawer: React.FC = () => {
  const { mobileDrawerStatus, changeMobileDrawerStatus } = useStore();

  const [isItems, setIsItems] = useState<number | null>(null);
  const [isSubItems, setIsSubItems] = useState<number | null>(null);
  const [openNavItemId, setOpenNavItemId] = useState<number | null>(null);
  const [openSubItemId, setOpenSubItemId] = useState<number | null>(null);

  /** CLOSE DRAWER ON NAV CLICK */
  const handleNavClick = () => {
    changeMobileDrawerStatus();
    setIsItems(null);
    setIsSubItems(null);
    setOpenNavItemId(null);
    setOpenSubItemId(null);
  };

  const toggleDropdown = (itemId: number) => {
    setIsItems((prev) => (prev === itemId ? null : itemId));
    setOpenNavItemId((prev) => (prev === itemId ? null : itemId));
  };

  const toggleSubItemDropdown = (subItemId: number) => {
    setIsSubItems((prev) => (prev === subItemId ? null : subItemId));
    setOpenSubItemId((prev) => (prev === subItemId ? null : subItemId));
  };

  return (
    <div
      className={`mobile-nav__wrapper ${mobileDrawerStatus ? "expanded" : ""}`}
    >
      <div
        className="mobile-nav__overlay"
        onClick={changeMobileDrawerStatus}
      ></div>

      <div className="mobile-nav__content">
        <span className="mobile-nav__close" onClick={changeMobileDrawerStatus}>
          <i className="fa fa-times"></i>
        </span>

        {/* LOGO */}
        <div className="logo-box">
          <Link to="/" onClick={handleNavClick}>
            <DynamicImage src="logo-light.png" alt="logo" />
          </Link>
        </div>

        {/* NAV */}
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map((item: NavItem) => (
              <li
                key={item.id}
                className={`${item.subMenu ? "dropdown" : ""} ${
                  isItems === item.id ? "open" : ""
                }`}
              >
                <div className="main-menu__list__wrapper">
                  <Link
                    to={item.link || "#"}
                    onClick={handleNavClick}
                    className={`${isItems === item.id ? "expanded" : ""}`}
                  >
                    {item.title}
                  </Link>

                  {item.subMenu && (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.id)}
                    >
                      <i className="fa fa-angle-down"></i>
                    </button>
                  )}
                </div>

                <ul
                  className={`close ${openNavItemId === item.id ? "open" : ""}`}
                >
                  {item.subMenu?.map((subMenu: SubMenu) => (
                    <li
                      key={subMenu.id}
                      className={`${subMenu.subMenu ? "dropdown" : ""} ${
                        isSubItems === subMenu.id ? "open" : ""
                      }`}
                    >
                      <div className="main-menu__list__wrapper">
                        <Link to={subMenu.link || "#"} onClick={handleNavClick}>
                          {subMenu.title}
                        </Link>

                        {subMenu.subMenu && (
                          <button
                            type="button"
                            onClick={() => toggleSubItemDropdown(subMenu.id)}
                          >
                            <i className="fa fa-angle-down"></i>
                          </button>
                        )}
                      </div>

                      <ul
                        className={`close ${
                          openSubItemId === subMenu.id ? "open" : ""
                        }`}
                      >
                        {subMenu.subMenu?.map((subSubItem: SubMenu) => (
                          <li key={subSubItem.id}>
                            <Link
                              to={subSubItem.link || "#"}
                              onClick={handleNavClick}
                            >
                              {subSubItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <Link to="mailto:enroutetrips04@gmail.com" onClick={handleNavClick}>
              enroutetrips04@gmail.com
            </Link>
          </li>
          <li>
            <Link to="tel:+9156980036420" onClick={handleNavClick}>
              +91 9711010190
            </Link>
          </li>
        </ul>

        {/* SOCIAL */}
        <div className="mobile-nav__social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/share/183X9hh6ag/?mibextid=wwXIfr"
            onClick={handleNavClick}
          >
            <i className="icon-facebook" />
          </a>
          {/* <Link to="https://twitter.com" onClick={handleNavClick}>
            <i className="icon-twitter" />
          </Link> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/enroute_tripss?igsh=bjEzNmtpMDk3Z2wy&utm_source=qr"
            onClick={handleNavClick}
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          {/* <Link to="https://youtube.com" onClick={handleNavClick}>
            <i className="icon-youtube" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Drawer;

// "use client";
// import React, { useState } from "react";
// import useStore from "@/store/useStore";
// import { Link } from "gatsby";
// import { navItems } from "@/data/navItems";
// import { demoPages } from "@/data/demoPages";
// import { Col, Container, Row } from "react-bootstrap";
// import DynamicImage from "@/components/common/DynamicImage/DynamicImage";

// interface SubMenu {
//   id: number;
//   title: string;
//   link?: string;
//   subMenu?: SubMenu[];
// }

// interface NavItem {
//   id: number;
//   title: string;
//   link?: string;
//   subMenu?: SubMenu[];
// }

// interface Page {
//   image: string;
//   title: string;
//   isNew?: boolean;
//   multiPageLink?: string;
//   onePageLink?: string;
//   darkPageLink?: string;
//   viewPageLink?: string;
// }

// const Drawer: React.FC = () => {
//   const [isMegaMenu, setIsMegaMenu] = useState(false);
//   const [isHomeDrop, setIsHomeDrop] = useState(false);
//   const {
//     mobileDrawerStatus,
//     changeMobileDrawerStatus,
//     setMobileDrawerStatus,
//   } = useStore();
//   const [isItems, setIsItems] = useState<number | null>(null);
//   const [isSubItems, setIsSubItems] = useState<number | null>(null);
//   const [openNavItemId, setOpenNavItemId] = useState<number | null>(null);
//   const [openSubItemId, setOpenSubItemId] = useState<number | null>(null);
//   const toggleDropdown = (itemId: number) => {
//     setIsItems((prevItem) => (prevItem === itemId ? null : itemId));
//     setOpenNavItemId((prev) => (prev === itemId ? null : itemId));

//     console.log(itemId);
//   };

//   const toggleSubItemDropdown = (subItemId: number) => {
//     setIsSubItems((prevSubItem) =>
//       prevSubItem === subItemId ? null : subItemId
//     );
//     setOpenSubItemId((prev) => (prev === subItemId ? null : subItemId));
//   };

//   const toggleMegaMenu = () => {
//     setIsMegaMenu(!isMegaMenu);
//   };
//   const toggleHomeDrop = () => {
//     setIsHomeDrop(!isMegaMenu);
//   };

//   return (
//     <div
//       className={`mobile-nav__wrapper ${mobileDrawerStatus ? "expanded" : ""}`}
//     >
//       <div
//         className="mobile-nav__overlay"
//         onClick={changeMobileDrawerStatus}
//       ></div>
//       <div
//         className={`mobile-nav__content ${
//           isMegaMenu ? "megamenu-popup-active" : ""
//         }`}
//       >
//         <span className="mobile-nav__close" onClick={changeMobileDrawerStatus}>
//           <i className="fa fa-times"></i>
//         </span>

//         <div className="logo-box">
//           <Link to="/" aria-label="logo image">
//             <DynamicImage src="logo-light.webp" alt="logo" />
//           </Link>
//         </div>

//         <div className="mobile-nav__container">
//           <ul className="main-menu__list">
//             {/* <li className={`megamenu  ${isMegaMenu ? "current" : ""}`}>
//               <Link
//                 to=""
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleMegaMenu();
//                 }}
//               >
//                 Home
//                 <button
//                   onClick={toggleHomeDrop}
//                   className={`${isHomeDrop ? "expanded" : ""}`}
//                 >
//                   <i className="fa fa-angle-down"></i>
//                 </button>
//               </Link>
//               <ul className={`${isHomeDrop ? "open " : ""} close`}>
//                 <li>
//                   <section className="home-showcase">
//                     <Container>
//                       <div className="home-showcase__inner">
//                         <Row>
//                           {demoPages.map((page: Page, index: number) => (
//                             <Col lg={3} md={6} key={index}>
//                               <div className="demo-one__card">
//                                 <div className="demo-one__image">
//                                   <DynamicImage
//                                     src={page.image}
//                                     alt={`gotur image ${page.title}`}
//                                   />
//                                   <div className="demo-one__btns">
//                                     {page.multiPageLink && (
//                                       <Link
//                                         to={page.multiPageLink}
//                                         className="gotur-btn demo-one__btn"
//                                       >
//                                         Multi Page
//                                       </Link>
//                                     )}
//                                     {page.onePageLink && (
//                                       <Link
//                                         to={page.onePageLink}
//                                         className="gotur-btn demo-one__btn"
//                                       >
//                                         One Page
//                                       </Link>
//                                     )}
//                                   </div>
//                                 </div>
//                                 <div className="demo-one__content">
//                                   <h3 className="demo-one__title"></h3>
//                                 </div>
//                               </div>
//                             </Col>
//                           ))}
//                         </Row>
//                       </div>
//                     </Container>
//                   </section>
//                 </li>
//               </ul>
//             </li> */}

//             {navItems.map((item: NavItem) => (
//               <li
//                 key={item.id}
//                 className={`${item.subMenu ? "dropdown" : ""} ${
//                   isItems === item.id ? "open" : ""
//                 }`}
//               >
//                 <Link
//                   to={item.link || "#"}
//                   className={`${isItems === item.id ? "expanded" : ""}`}
//                 >
//                   {item.title}
//                   {item.subMenu && (
//                     <button
//                       onClick={() => toggleDropdown(item.id)}
//                       className={`${isItems === item.id ? "expanded" : ""}`}
//                     >
//                       <i className="fa fa-angle-down"></i>
//                     </button>
//                   )}
//                 </Link>

//                 <ul
//                   className={`close ${openNavItemId === item.id ? "open" : ""}`}
//                 >
//                   {item.subMenu?.map((subMenu: SubMenu) => (
//                     <li
//                       key={subMenu.id}
//                       className={`${subMenu.subMenu ? "dropdown" : ""} ${
//                         isSubItems === subMenu.id ? "open" : ""
//                       }`}
//                     >
//                       <div className=" main-menu__list__wrapper">
//                         <Link
//                           to={subMenu.link || "#"}
//                           className={`${
//                             isSubItems === subMenu.id ? "expanded" : ""
//                           }`}
//                         >
//                           {subMenu.title}{" "}
//                         </Link>
//                         {subMenu.subMenu && (
//                           <button
//                             onClick={() => toggleSubItemDropdown(subMenu.id)}
//                             className={`${
//                               isSubItems === subMenu.id ? "expanded" : ""
//                             }`}
//                           >
//                             <i className="fa fa-angle-down"></i>
//                           </button>
//                         )}
//                       </div>

//                       <ul
//                         className={`close ${
//                           openSubItemId === subMenu.id ? "open" : ""
//                         }`}
//                       >
//                         {subMenu.subMenu?.map((subSubItem: SubMenu) => (
//                           <li key={subSubItem.id}>
//                             <Link to={subSubItem.link || "#"}>
//                               {subSubItem.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <ul className="mobile-nav__contact list-unstyled">
//           <li>
//             <span className="mobile-nav__contact__icon">
//               <i className="fa fa-envelope"></i>
//             </span>
//             <Link to="mailto:enroutetrips04@gmail.com">enroutetrips04@gmail.com</Link>
//           </li>
//           <li>
//             <span className="mobile-nav__contact__icon">
//               <i className="fa fa-phone-alt"></i>
//             </span>
//             <Link to="tel:+9156980036420">+91 9711010190</Link>
//           </li>
//         </ul>

//         <div className="mobile-nav__social">
//           <Link to="https://facebook.com">
//             {" "}
//             <i className="icon-facebook" aria-hidden="true"></i>{" "}
//             <span className="sr-only">Facebook</span>
//           </Link>
//           <Link to="https://twitter.com">
//             {" "}
//             <i className="icon-twitter" aria-hidden="true"></i>{" "}
//             <span className="sr-only">Twitter</span>
//           </Link>
//           <Link to="https://instagram.com">
//             {" "}
//             <i className="icon-linkedin" aria-hidden="true"></i>{" "}
//             <span className="sr-only">Linked In</span>
//           </Link>
//           <Link to="https://youtube.com">
//             {" "}
//             <i className="icon-youtube" aria-hidden="true"></i>{" "}
//             <span className="sr-only">Youtube</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Drawer;
