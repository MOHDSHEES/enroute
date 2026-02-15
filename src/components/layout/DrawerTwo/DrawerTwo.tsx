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

const DrawerTwo: React.FC = () => {
  const { mobileDrawerTwoStatus, changeMobileDrawerTwoStatus } = useStore();

  const [isItems, setIsItems] = useState<number | null>(null);
  const [isSubItems, setIsSubItems] = useState<number | null>(null);
  const [openNavItemId, setOpenNavItemId] = useState<number | null>(null);
  const [openSubItemId, setOpenSubItemId] = useState<number | null>(null);

  /** CLOSE DRAWER ON NAV CLICK */
  const handleNavClick = () => {
    changeMobileDrawerTwoStatus();
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
      className={`mobile-nav__wrapper ${
        mobileDrawerTwoStatus ? "expanded" : ""
      }`}
    >
      <div
        className="mobile-nav__overlay"
        onClick={changeMobileDrawerTwoStatus}
      ></div>

      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close"
          onClick={changeMobileDrawerTwoStatus}
        >
          <i className="fa fa-times"></i>
        </span>

        {/* LOGO */}
        <div className="logo-box">
          <Link to="/" aria-label="logo image" onClick={handleNavClick}>
            <DynamicImage src="logo-light.png" alt="logo" />
          </Link>
        </div>

        {/* NAV ITEMS */}
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
                      className={`${isItems === item.id ? "expanded" : ""}`}
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
                        <Link
                          to={subMenu.link || "#"}
                          onClick={handleNavClick}
                          className={`${
                            isSubItems === subMenu.id ? "expanded" : ""
                          }`}
                        >
                          {subMenu.title}
                        </Link>

                        {subMenu.subMenu && (
                          <button
                            type="button"
                            onClick={() => toggleSubItemDropdown(subMenu.id)}
                            className={`${
                              isSubItems === subMenu.id ? "expanded" : ""
                            }`}
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
            <span className="mobile-nav__contact__icon">
              <i className="fa fa-envelope"></i>
            </span>
            <Link to="mailto:enroutetrips04@gmail.com" onClick={handleNavClick}>
              enroutetrips04@gmail.com
            </Link>
          </li>
          <li>
            <span className="mobile-nav__contact__icon">
              <i className="fa fa-phone-alt"></i>
            </span>
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
            <i className="icon-facebook"></i>
          </a>
          {/* <Link to="https://twitter.com" onClick={handleNavClick}>
            <i className="icon-twitter"></i>
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
            <i className="icon-youtube"></i>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DrawerTwo;

// "use client";
// import React, { useState } from "react";
// import useStore from "@/store/useStore";
// import { Link } from "gatsby";

// import logo from "@/assets/images/logo-light.webp";
// import { navItems } from "@/data/navItems";

// import MegaMenu from "@/components/common/MegaMenu/MegaMenu";
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

// const DrawerTwo: React.FC = () => {
//   const [isMegaMenu, setIsMegaMenu] = useState<boolean>(false);

//   const [isHomeDrop, setIsHomeDrop] = useState(false);
//   const { mobileDrawerTwoStatus, changeMobileDrawerTwoStatus } = useStore();
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
//       className={`mobile-nav__wrapper ${
//         mobileDrawerTwoStatus ? "expanded" : ""
//       }`}
//     >
//       <div
//         className="mobile-nav__overlay"
//         onClick={changeMobileDrawerTwoStatus}
//       ></div>
//       <div className={`mobile-nav__content `}>
//         <span
//           className="mobile-nav__close"
//           onClick={changeMobileDrawerTwoStatus}
//         >
//           <i className="fa fa-times"></i>
//         </span>

//         <div className="logo-box">
//           <Link to="/" aria-label="logo image">
//             <DynamicImage src="logo-light.webp" alt="logo" />
//           </Link>
//         </div>

//         <div className="mobile-nav__container">
//           <ul className="main-menu__list">
//             {/* <li
//               className={`megamenu megamenu megamenu-clickable megamenu-clickable--toggle `}
//             >
//               <Link
//                 to='#'
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsMegaMenu(!isMegaMenu);
//                 }}
//               >
//                 Demos
//               </Link>
//               <MegaMenu setIsMegaMenu={setIsMegaMenu} isMegamenu={isMegaMenu} />
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

// export default DrawerTwo;
