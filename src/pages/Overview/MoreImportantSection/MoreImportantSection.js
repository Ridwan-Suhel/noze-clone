import React, { useEffect, useState } from "react";
import impAreaVdo from "../../../video/WALP.mp4";

const MoreImportantSection = () => {
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const [scroll, setScroll] = useState(false);

  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const videoEl = document.getElementById("vdo");

      if (window.scrollY > 3670) {
        setScroll(true);
        document.getElementById("vdo").play();
      } else if (window.scrollY < 3669) {
        videoEl.currentTime = 0;
        videoEl.pause();
      }
    });
  }, [scroll]);

  return (
    <section className="pt-36">
      <div className="title">
        <h2 className="title-h2 text-center">
          What's more important, form <br />
          or function?
        </h2>
        <p className="text-center my-12 text-[#6b5a78]">
          We didn't think it was fair to have to choose.
        </p>
      </div>
      <div className="imp-vdo-area vdoTest" id="">
        {/* <span>{scrollPosition}</span> */}
        <video
          className={scroll ? "claseeadded" : "classRemoved"}
          autoPlay={scroll ? "autoPlay" : false}
          muted
          id="vdo"
        >
          <source src={impAreaVdo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default MoreImportantSection;
