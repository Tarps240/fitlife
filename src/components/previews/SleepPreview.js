import React from 'react';
import { Line } from 'react-chartjs-2';

function SleepPreview() {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: 'Hours of Sleep',
                data: [4, 7, 8, 7, 6, 7, 5],
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
            <h3>Hours of Sleep</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default SleepPreview;