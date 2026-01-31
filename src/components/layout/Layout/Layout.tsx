import CustomCursor from "@/components/common/CustomCursor/CustomCursor";
import ScrollTop from "@/components/common/ScrollTop/ScrollTop";
import React, { ReactNode, useEffect, useState } from "react";
import "@fontsource/plus-jakarta-sans/latin.css";
import "@fontsource/just-another-hand/latin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "photoswipe/dist/photoswipe.css";
import "react-datepicker/dist/react-datepicker.css";
import "rc-slider/assets/index.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "@/assets/vendors/icofont/icofont.min.css";
import "@/assets/vendors/gotur-icons/style.css";
import "@/assets/vendors/animate/animate.min.css";
// import "@/assets/css/gotur-landing.css";
import "@/assets/css/gotur.css";
import "@/assets/css/gotur-gatsby.css";
import "@/assets/css/custom.css";
import useWow from "@/hooks/useWow";
import Search from "@/components/common/Search/Search";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import Drawer from "../Drawer/Drawer";
import DrawerTwo from "../DrawerTwo/DrawerTwo";
interface LayoutProps {
  children: ReactNode;
}
import { useLocation } from "@reach/router";
import Preloader from "@/components/common/Preloader/Preloader";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  useWow();
  const [showPreloader, setShowPreloader] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    setShowPreloader(true);
    const timer = setTimeout(() => setShowPreloader(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);
  useEffect(() => {
    if (pathname === "/home-boxed/") {
      document.body.classList.toggle("boxed-wrapper");
    } else {
      document.body.classList.remove("boxed-wrapper");
    }
  }, [pathname]);
  return (
    <div className="page-wrapper">
      {showPreloader && <Preloader />}
      <CustomCursor />
      {children}
      <Drawer />
      <DrawerTwo />
      <Search />
      <Sidebar />
      <ScrollTop />
    </div>
  );
};

export default Layout;
