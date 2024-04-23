import React, { useState } from 'react';
import './styles.css';

const FormValidation = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        address: '',
        number: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validate input
        if (name === 'number' && value.length > 10) {
            setErrors({
                ...errors,
                [name]: 'Number cannot be greater than 10 digits'
            });
        } else {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform form submission logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className="form-container">
            <h2>Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-field ${errors.email ? 'invalid' : 'valid'}`}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={`input-field ${errors.username ? 'invalid' : 'valid'}`}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input 
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`input-field ${errors.address ? 'invalid' : 'valid'}`}
                    />
                    {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div className="form-group">
                    <label>Number:</label>
                    <input 
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className={`input-field ${errors.number ? 'invalid' : 'valid'}`}
                    />
                    {errors.number && <p className="error">{errors.number}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormValidation;
