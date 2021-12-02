import React from "react";
import "./Chart.scss";
import ChartBars from "../chart-bars/ChartBars";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximun = Math.max(...dataPointValues)

    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint, index) => 
            <ChartBars
              key={index}
              value={dataPoint.value}
              maxValue={totalMaximun}  
              label={dataPoint.label}
            />
            )};

        </div>
);

};
export default Chart;