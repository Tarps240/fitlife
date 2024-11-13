import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

function PasswordReset() {
    const [email, setEmail] = useState('');
    const { resetPassword } = useAuth();

    const handleResetPassword = (e) => {
        e.preventDefault();
        resetPassword(email);
        alert("If an account with that email exists, a reset link has been sent.");
   };

   return (
    <div>
        <h2>Password Reset</h2>
        <form onSubmit={handleResetPassword}>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Reset Password</button>
        </form>
    </div>
   );
}

export default PasswordReset;