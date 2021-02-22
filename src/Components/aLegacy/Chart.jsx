import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSunburst from "highcharts/modules/sunburst";
import options from "../../helpers/skills";

HighchartsSunburst(Highcharts);
Highcharts.setOptions({
  colors: ["#90ed7d", "#f7f560", "#ff668c", "#66ebff"],
});
Highcharts.getOptions().colors.splice(0, 0, "transparent");

const Sunburst = () => (
  <>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </>
);

export default Sunburst;
