import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        // Preform authentication logic here.
        login();
        navigate('./Dashboard.js');
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="title">Login</h2>
                <form className="form" onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input"
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='input'
                />
                <button type="submit" className='button'>Login</button>
                </form>
                <p>
                    New user? <Link to="/signup">Sign up here</Link>
                </p>
                <p>
                    Forgot your password? <Link to="/password-reset">Reset it here</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;