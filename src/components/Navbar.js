import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const onHabitLogPage = location.pathname.includes('-log');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav>
            {/* Conditionaly render Dashboard link only on habit loggin pages */}
            {isAuthenticated && onHabitLogPage && (
            <Link to="/dashboard">Dashboard</Link>
            )}
            

            {/* Conditionally render habit logging links */}
            {isAuthenticated && onHabitLogPage && (
                <>
                <Link to="/water-log">Water Log</Link>
                <Link to="/sleep-log">Sleep Log</Link>
                <Link to="/calories-log">Calories</Link>
                <Link to="/meals-log">Meals</Link>
                <Link to="/exercise-log">Exercise</Link>
                </>
            )}

            {/* Show Logout button if authenticated */}
            {isAuthenticated && (
                <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
                    Logout
                </button>
            )}
        </nav>
    );
}


export default Navbar;