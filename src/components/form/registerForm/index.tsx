import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css';
import { RegistrationNewUser } from "../../../api/services/user";

const RegistrationForm = () => {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        password: '',
        role: 'User'
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
            await RegistrationNewUser(formData);
            navigate("/login");
        } catch (error: any) {
            alert(error.message);
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
