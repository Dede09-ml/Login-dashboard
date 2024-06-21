// LineChart.js

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import dummyData from './dummy.json'; // Sesuaikan dengan path file dummyData.json

const LineChart = () => {
    const [chartData, setChartData] = useState({});
    console.log(dummyData)

    useEffect(() => {
        if (dummyData.length > 0) {
            const formattedData = {
                labels: dummyData.map(data => data.id),
                datasets: [
                    {
                        label: 'Age',
                        data: dummyData.map(data => data.age),
                        fill: false,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 1
                    }
                ]
            };
            setChartData(formattedData);
        }
    }, []);

    const options = {
        scales: {
            x: {
                type: 'category', // Menyatakan bahwa sumbu x adalah skala kategori
                labels: dummyData.map(data => data.id) // Menggunakan labels yang sudah diformat (misalnya id)
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="line-chart">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;
