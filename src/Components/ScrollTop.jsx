import React from "react";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";

const ScrollTop = () => (
  <div className="backto-top">
    <ScrollToTop showUnder={160} style={{ bottom: "150px", right: "50px" }}>
      <FiChevronUp />
    </ScrollToTop>
  </div>
);

export default ScrollTop;
