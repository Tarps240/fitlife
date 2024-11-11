import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Navbar() {
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const showHabitLinks = 
        location.pathname === './dashboard' || location.pathname.includes('-log');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>

            {/* Conditionally render habit logging links */}
            {isAuthenticated && showHabitLinks && (
                <>
                <Link to="/water-log">Water Log</Link>
                <Link to="/sleep-log">Sleep Log</Link>
                <Link to="/calories-log">Calories</Link>
                <Link to="meals-log">Meals</Link>
                <Link to="exercise-log">Exercise</Link>
                </>
            )}

            {isAuthenticated && (
                <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
                    Logout
                </button>
            )}

        </nav>
    );
}

export default Navbar;