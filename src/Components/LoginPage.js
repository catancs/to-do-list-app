import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        const isValidUser = email === 'test@test.com';
        const isValidPassword = password === '0000';

        if (isValidUser && isValidPassword) {
            navigate('/todo');
        } else {
            alert('Invalid credentials, please try again.');
        }
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="login-container">
            <div className="top-left-info">
                <div className="pointer-events-auto mx-auto max-w-xl p-6">
                    <p className="text-sm leading-6 text-gray-900">
                        Use this (username,password) combination to login: <strong>("test@test.com", "0000")</strong>
                    </p>
                </div>
            </div>
            <div className="login-form-wrapper">
                <div className="mb-8 space-y-3">
                    <p className="login-title">Login</p>
                    <p className="login-description">Enter your email and password to login.</p>
                </div>
                <form className="login-form" onSubmit={handleLogin}>
                    <input type="text" className="login-input" id="email" placeholder="Username" name="email" value={email} onChange={handleEmailChange} />
                    <input type="password" className="login-input" id="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange}/>
                    <button className="login-button" type="submit">
                        Login
                    </button>
                </form>
                <div className="text-center">
                    No account? <a className="text-blue-500" href="/signup">Create one</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
