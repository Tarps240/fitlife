import React from 'react';
import { Line } from 'react-chartjs-2';

function WaterPreview() {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: 'Water Intake (cups)',
                data: [64, 72, 80, 76, 68, 70, 75],
                backgroundColor: '#32CD32',
                borderColor: '#32CD32',
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <div>
            <h3>Water Intake</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default WaterPreview;