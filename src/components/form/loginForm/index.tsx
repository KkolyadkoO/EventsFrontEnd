import React, { useState } from 'react';
import './styles.css';
import { Login } from "../../../api/services/user";
import {useNavigate} from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
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
            const user = await Login(formData);
            console.log(user);
            navigate("/");
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <form className='LoginForm' onSubmit={handleSubmit}>
            <h1>LOG IN</h1>
            <input
                type="text"
                name="username"
                placeholder="Enter Login"
                value={formData.username}
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
