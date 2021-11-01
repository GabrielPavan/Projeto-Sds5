import Chart from "react-apexcharts";

const DonutChart = () => {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    const options = {
        legend: {
            show: true
        },
        fill: {
            type: 'gradient',
        },
        colors: ['#ffa305', '#25d9f5', '#f52525', '#1205ff', '#0dff05']
    }
    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
};

export default DonutChart;