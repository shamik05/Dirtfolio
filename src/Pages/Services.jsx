import React from "react";
import ServiceList from "../Components/ServiceList";

const Services = () => (
  <>
    {/* Start Service Area  */}
    <div id="skills" className="fix">
      <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                <h2 className="title">Skills</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
              </div>
            </div>
          </div>
          <div className="row creative-service">
            <div className="col-lg-12">
              <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Service Area  */}
  </>
);

export default Services;
