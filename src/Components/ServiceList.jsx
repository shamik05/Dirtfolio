/* eslint-disable react/prop-types */
import React from "react";
import {
  FiCast, FiLayers, FiUsers, FiMonitor,
} from "react-icons/fi";

const list = [
  {
    icon: <FiCast />,
    title: "Business Stratagy",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiLayers />,
    title: "Website Development",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiUsers />,
    title: "Marketing & Reporting",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMonitor />,
    title: "Mobile App Development",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiUsers />,
    title: "Marketing & Reporting",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMonitor />,
    title: "Mobile App Development",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];

const ServicesList = ({ column, item }) => {
  const ServiceContent = list.slice(0, item);

  return (
    <>
      <div className="row">
        {ServiceContent.map((val) => (
          <div className={`${column}`} key={val}>
            <a href="/service-details">
              <div className="service service__style--2">
                <div className="icon">
                  {val.icon}
                </div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
export default ServicesList;
