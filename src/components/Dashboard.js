import React from 'react';
import WaterPreview from './previews/WaterPreview';
import SleepPreview from './previews/SleepPreview';
import CaloriesPreview from './previews/CaloriesPreview';
import MealsPreview from './previews/MealsPreview';
import ExercisePreview from './previews/ExercisePreview';

function Dashboard() {
    return (
        <div>
            <h2 style={{ color: '#32cd32' }}>Dashboard</h2>
            <WaterPreview />
            <SleepPreview />
            <CaloriesPreview />
            <MealsPreview />
            <ExercisePreview />
        </div>
    );
}

export default Dashboard;