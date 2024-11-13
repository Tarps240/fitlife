import React from 'react';
import { Line } from 'react-chartjs-2';

function MealsPreview() {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: 'Meals Eaten',
                data: [4, 2, 4, 5, 3, 2, 5],
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
            <h3>Meals Eaten</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default MealsPreview;