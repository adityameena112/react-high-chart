import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = ({ chartType }) => {
  const [options, setOptions] = useState({
    chart: {
      type: chartType
    },
    title: {
      text: "Farmer Bank"
    },
    xAxis: {
      categories: ["BOI", "IDBI", "SBI", "HDFC", "CBI", "PNB"]
    },
    yAxis: {
      title: {
        text: "Farmer Bank"
      }
    },
    series: [
      {
        name: "Farmer",
        data: [40, 20, 75, 45, 15, 90]
      }
    ],
  });

  setInterval(() => {
    let type
    if (options.chart.type === 'bar') {
        type = 'line'
    } else if (options.chart.type === 'line') {
        type = 'column'
    } else {
        type = 'bar'
    }
    const newOptions = {
        ...options,
        chart: {
            type: type
        }
    }
    setOptions(newOptions)
  }, 5000)

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      immutable={false}
      updateArgs={[true]}
    />
  );
};

export default BarChart;
