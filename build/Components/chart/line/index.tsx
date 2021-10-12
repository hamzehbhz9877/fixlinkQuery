import {FC} from "react";
import {Line} from "react-chartjs-2"
import {ChartData} from "chart.js";
import "./defaults"

interface Props{
    data:ChartData,
    chartOptions?:typeof Line["defaultProps"]
}

const LineChart:FC<Props> = ({data,chartOptions,}) => {
    return (
        <Line data={data} {...chartOptions}/>
    )
};
export default LineChart