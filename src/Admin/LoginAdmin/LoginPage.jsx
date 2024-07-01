import React, { useState } from 'react';
import './LoginPage.css'; 

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        // Handle login logic (e.g., send credentials to backend, authenticate)
        // For simplicity, we'll just log the username and password to console
        console.log('Username:', username);
        console.log('Password:', password);

        // Clear form fields
        setUsername('');
        setPassword('');
        setError('');
    };
    const toggleFormVisibility = () => {
        setShowForm(!showForm); // Toggle form visibility
    };
    return (
        // <div className="login-form-container">
        //     <button className='buttonLogin'>Login</button>
        //     <form onSubmit={handleSubmit} className="login-form">
        //         <label htmlFor="username">Username or Email:</label>
        //         <input
        //             type="text"
        //             id="username"
        //             value={username}
        //             onChange={(e) => setUsername(e.target.value)}
        //             placeholder="Enter your username or email"
        //         />

        //         <label htmlFor="password">Password:</label>
        //         <input
        //             type="password"
        //             id="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             placeholder="Enter your password"
        //         />

        //         {error && <div className="error">{error}</div>}

        //         <button type="submit">Login</button>
        //     </form>
        // </div>

<div className="login-form-container">
            <button className={`buttonLogin ${showForm ? 'hide' : ''}`} onClick={toggleFormVisibility}>
                Login
            </button>
            <form onSubmit={handleSubmit} className={`login-form ${showForm ? 'show' : ''}`}>
                <label htmlFor="username">Username or Email:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username or email"
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />

                {error && <div className="error">{error}</div>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;



