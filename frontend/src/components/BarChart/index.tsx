import Chart from "react-apexcharts";

const BarChart = () => {
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
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    return (
      <Chart 
            options= {{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="300" 
      /> 
    );
}
export default BarChart;