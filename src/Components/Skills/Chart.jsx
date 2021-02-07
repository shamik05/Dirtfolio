import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSunburst from "highcharts/modules/sunburst";
import data from "../../helpers/skills";

HighchartsSunburst(Highcharts);

const options = {
  chart: {
    height: "50%",
  },
  title: {
    text: "Sunburst",
  },
  subtitle: {
    text: "My Skills",
  },
  series: [{
    type: "sunburst",
    data,
    allowDrillToNode: true,
    cursor: "pointer",
    // dataLabels: {
    //   format: "{point.name}",
    //   filter: {
    //     property: "innerArcLength",
    //     operator: ">",
    //     value: 16,
    //   },
    //   rotationMode: "circular",
    // },
    // levels: [{
    //   level: 1,
    //   levelIsConstant: false,
    //   dataLabels: {
    //     filter: {
    //       property: "outerArcLength",
    //       operator: ">",
    //       value: 64,
    //     },
    //   },
    // },
    // {
    //   level: 2,
    //   colorByPoint: true,
    // },
    // {
    //   level: 3,
    //   colorVariation: {
    //     key: "brightness",
    //     to: -0.5,
    //   },
    // }, {
    //   level: 4,
    //   colorVariation: {
    //     key: "brightness",
    //     to: 0.5,
    //   },
    // },
    // ],

  }],
  // tooltip: {
  //   headerFormat: "",
  //   pointFormat: "The population of <b>{point.name}</b> is <b>{point.value}</b>",
  // },
};

const Sunburst = () => (
  <>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </>
);

export default Sunburst;
