import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PasswordReset from './components/PasswordReset';
import Dashboard from './components/Dashboard';
import WaterLog from './components/habits/WaterLog';
import SleepLog from './components/habits/SleepLog';
import CaloriesLog from './components/habits/CaloriesLog';
import MealsLog from './components/habits/MealsLog';
import ExerciseLog from './components/habits/ExerciseLog';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route 
          path="/dashboard" 
          element={<PrivateRoute isAuthenticated={true}><Dashboard /></PrivateRoute>} />
        <Route path="/water-log" element={<WaterLog />} />
        <Route path="/sleep-log" element={<SleepLog />} />
        <Route path="/calories-log" element={<CaloriesLog />} />
        <Route path="/meals-log" element={<MealsLog />} />
        <Route path="/exercise-log" element={<ExerciseLog />} />
      </Routes>
    </Router>
  );
}

export default App;