import React, { useState } from 'react';
import './LoginForm.css';
import { Login } from "../../../api/services/user";


const LoginForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await Login(formData); // Call the login function with the form data
            alert('Login successful');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <form className='LoginForm' onSubmit={handleSubmit}>
            <h1>LOG IN</h1>
            <input
                type="text"
                name="userName"
                placeholder="Enter Login"
                value={formData.userName}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Log in</button>
        </form>
    );
};

export default LoginForm;
