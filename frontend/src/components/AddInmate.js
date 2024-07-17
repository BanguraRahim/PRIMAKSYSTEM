

import React, { useState } from 'react';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap imported
import backgroundImage from '../img/jail.jpg';

const AddInmate = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        inmate_id: '',
        gender: '',
        date_of_birth: '',
        crime_committed: '',
        sentence_year: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://localhost:8000/api/inmates/', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                const result = await response.json();
                alert('Inmate added successfully:', result);
            } else {
                const errorData = await response.json();
                console.error('Failed to add inmate:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div
            className="d-flex flex-column"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '94vh'
            }}
        >
            <div className="flex-grow-1 container mt-4 d-flex justify-content-center" style={{ height: '70vh' }}>
                <div className="w-50 bg-white p-2 rounded shadow" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    <h1 className="text-center">Add Inmate</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name:</label>
                            <input type="text" className="form-control" name="full_name" value={formData.full_name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Inmate ID:</label>
                            <input type="text" className="form-control" name="inmate_id" value={formData.inmate_id} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Gender:</label>
                            <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} required>
//                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
//                                <option value="female">Female</option>
//                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Date of Birth:</label>
                            <input type="date" className="form-control" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Crime Committed:</label>
                            <textarea className="form-control" name="crime_committed" value={formData.crime_committed} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Sentence Year:</label>
                            <input type="number" className="form-control" name="sentence_year" value={formData.sentence_year} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Image:</label>
                            <input type="file" className="form-control-file" name="image" onChange={handleFileChange} />
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-info w-20">Add Inmate</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddInmate;


