import React from "react";
import SocialShare from "../Constants/SocialShare";

const Footer = () => (
  <div className="footer ptb--30" data-black-overlay="6">
    <div className="wrapper plr--50 plr_sm--20">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <p>
            Icons made by
            <a href="https://icon54.com/" title="Pixel perfect"> Pixel perfect </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
            {SocialShare.map(({ key, link, Social }) => (
              <li key={key}><a href={link}>{Social}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
            <p>Copyright © 2021 Shamik Haldar.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
