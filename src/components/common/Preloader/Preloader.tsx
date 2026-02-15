// components/Preloader.tsx

import React, { useEffect, useState } from "react";
// import loaderImage from "@/assets/images/loader.png"; // Adjust path as needed

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`preloader ${loading ? "" : "preloader-hidden"}`}>
      <div
        className="preloader__image"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771156639/Untitleddesign3-ezgif.com-loop-count_jlfl9c.gif')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          maxWidth: "200px",
          height: "100%",
        }}
        // style={{
        //   backgroundImage: `url('/https://res.cloudinary.com/dtn5i5hpt/image/upload/v1771156639/Untitleddesign3-ezgif.com-loop-count_jlfl9c.gif')`,
        // }}
        // style={{ backgroundImage: `url(${loaderImage})` }}
      ></div>
    </div>
  );
};

export default Preloader;
