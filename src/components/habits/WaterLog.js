import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function WaterLog() {
    const [waterData, setWaterData] = useState([64, 72, 80, 76, 68, 70, 75]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWaterData = [...waterData.slice(1), parseInt(input)];
        setWaterData(newWaterData);
        setInput('');
    };

    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: 'Water Intake (cups)',
                data: waterData,
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
            <h2 style={{ color: '#32CD32' }}>Water Intake</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter water intake (cups)"
                />
                <button type="submit">Log Water Intake</button>
            </form>
            <Line data={data} options={options} />
        </div>
    );
}

export default WaterLog;