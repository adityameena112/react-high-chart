import { useState } from "react";
import BarChart from "./components/BarChart";
import DropdownTabs from "./components/DropdownTabs";


const App = () => {

  const [options, setOptions] = useState({
    chart: {
      type: 'column'
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



  const [chartType, setChartType] = useState("column")

  const handleTypeChange = (type) => {

    console.log(type);

    setChartType(type)
    const newOptions = {
      ...options,
      chart: {
        type: type
      }
    }
  }

  return (
    <div>
      <div>
        <DropdownTabs chartType={chartType} onChartTypeChange={handleTypeChange} />
      </div>
      <div style={{ width: '70%' }}>
        <BarChart options={options} />
      </div>
    </div>
  )
}


export default App;
