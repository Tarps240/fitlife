import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenicated] = useState(false);

    const login = () => setIsAuthenicated(true);
    const logout = () => setIsAuthenicated(false);

    const signup = (email, password) => {
        // Logic to create a new user (e.g., call an API endpoint)
        console.log("Signing up:", email, password);
        setIsAuthenicated(true); 
    };

    const resetPassword = (email) => {
        // Logic to reset the password (e.g., call an API endpoint)
        console.log("Resetting password for:", email);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, signup, resetPassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);