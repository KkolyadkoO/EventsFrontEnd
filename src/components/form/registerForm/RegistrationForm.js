import React, { useState } from 'react';
import './RegisterForm.css';
import { RegistrationNewUser } from "../../../api/services/user";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        password: '',
        role: 'User'  // You can set a default role if needed
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
            await RegistrationNewUser(formData); // Call the registration function
            alert('User registered successfully!');
        } catch (error) {
            alert(error.message);
            console.error(error.message);
        }
    };

    return (
        <form className='RegistrationForm' onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <input
                type="text"
                name="userName"
                placeholder="Enter Username"
                value={formData.userName}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="userEmail"
                placeholder="Enter Email"
                value={formData.userEmail}
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
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
