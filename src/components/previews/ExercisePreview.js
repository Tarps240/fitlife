import React from 'react';
import { Line } from 'react-chartjs-2';

function ExercisePreview() {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: 'Exercise (hours)',
                data: [4, 2, 2, 3, 2, 1, 3],
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
            <h3>Hours of Exercise</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default ExercisePreview;