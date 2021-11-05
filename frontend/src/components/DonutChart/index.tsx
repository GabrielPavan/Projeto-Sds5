import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
    labels: string[];
    series: number[];
}
const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(responce => {
                const data = responce.data as SaleSum[];
                const myLabels = data.map(x => x.sellername);
                const mySeries = data.map(x => x.sum);
                setChartData({ labels: myLabels, series: mySeries });
            });
    }, []);

    //Forma errada


    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    const options = {
        legend: {
            show: true
        },
        fill: {
            type: 'gradient',
        },
        colors: ['#ffa305', '#25d9f5', '#f52525', '#1205ff', '#0dff05']
    };
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="300" />
    );
}

export default DonutChart;