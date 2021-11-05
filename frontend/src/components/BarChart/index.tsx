import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}
type SeriesData = {
    name: string;
    data: number[];
}
const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
        
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(responce => {
                const data = responce.data as SaleSuccess[];
                const myLabels = data.map(x => x.sellername);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));
                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% success",
                            data: mySeries
                        }
                    ]
                });
            });
    },[]);
    

    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                distributed: true,
            }
        },
        fill: {
            type: 'gradient',
        },
        colors: ['#ffa305', '#25d9f5', '#f52525', '#1205ff', '#0dff05']
    };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels}}
            series={chartData.series}
            type="bar"
            height="300"
        />
    );
}
export default BarChart;