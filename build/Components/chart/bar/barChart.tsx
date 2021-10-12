import {FC} from "react";
import {Bar} from "react-chartjs-2"
import {ChartData} from "chart.js";
import "./defaults"

interface Props {
    data: ChartData | any,
    chartOptions? : typeof Bar["defaultProps"]
}

const BarChart: FC<Props> = ({data,chartOptions}) => {
    return (
        <Bar data={data} {...chartOptions} />
    )
};
export default BarChart