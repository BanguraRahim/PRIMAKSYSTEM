////import React, { useState } from 'react';
////import axios from 'axios';
////import 'bootstrap/dist/css/bootstrap.min.css';
////import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS
////import { useNavigate } from 'react-router-dom';
////import './Login.css'; // Import the CSS file
////
////const Login = () => {
////    const [formData, setFormData] = useState({
////        username: '',
////        password: ''
////    });
////    const [showPassword, setShowPassword] = useState(false);
////
////    const navigate = useNavigate();
////
////    const handleChange = (e) => {
////        const { name, value } = e.target;
////        setFormData({ ...formData, [name]: value });
////    };
////
////    const togglePassword = () => {
////        setShowPassword(!showPassword);
////    };
////
////    const handleSubmit = async (e) => {
////        e.preventDefault();
////        try {
////            const response = await axios.post('http://localhost:8000/login/', formData);
////            localStorage.setItem('access', response.data.access);
////            localStorage.setItem('refresh', response.data.refresh);
////            localStorage.setItem('role', response.data.role);
////
////            if (response.data.role === 'prison_officer') {
////                navigate('/prisonOfficeDashboard');
////            } else if (response.data.role === 'admin') {
////                navigate('/adminDashboard');
////            }
////        } catch (error) {
////            console.error(error.response.data);
////            alert('The User does not Exist!');
////        }
////    };
////
////    return (
////         <div className="container mt-5 d-flex justify-content-center align-items-center">
////            <div className="login-container">
////                <div className="row align-items-center">
////                    <div className="col-md-6 left-column">
////
////                    </div>
////                    <div className="col-md-6 right-column">
////                        <div className="login-form-container rounded-lg border p-4" style={{ maxWidth: '800px',width: '400px', height:'300px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
////                            <h1 className="text-center mb-4">Login</h1>
////                            <form onSubmit={handleSubmit} className="login-form">
////                                <div className="form-group">
////                                    <div className="input-group">
////                                        <div className="input-group-prepend d-flex align-items-center pr-2">
////                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
////                                        </div>
////                                        <input
////                                            type="text"
////                                            className="form-control"
////                                            id="username"
////                                            name="username"
////                                            placeholder="Username"
////                                            value={formData.username}
////                                            onChange={handleChange}
////                                            required
////                                        />
////                                    </div>
////                                </div>
////                                <div className="form-group">
////                                    <div className="input-group">
////                                        <div className="input-group-prepend d-flex align-items-center pr-2">
////                                            <span className="input-group-text"><i className="fas fa-lock"></i></span>
////                                        </div>
////                                        <input
////                                            type={showPassword ? 'text' : 'password'}
////                                            className="form-control"
////                                            id="password"
////                                            name="password"
////                                            placeholder="Password"
////                                            value={formData.password}
////                                            onChange={handleChange}
////                                            required
////                                        />
////
////                                    </div>
////                                </div>
////                                <button type="submit" className="btn btn-primary login-button" style={{ backgroundColor: '#2c3e50', borderColor: '#2c3e50' }}>Login</button>
////                            </form>
////                        </div>
////                    </div>
////                </div>
////            </div>
////        </div>
////    );
////};
////
////export default Login;
////
////
//import React, { useState } from 'react';
//import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS
//import { useNavigate } from 'react-router-dom';
//import Footer from './Footer.js';
//import './Login.css'; // Import the CSS file
//import backgroundImage from '../img/jail.jpg';
//
//const Login = () => {
//    const [formData, setFormData] = useState({
//        username: '',
//        password: ''
//    });
//    const [showPassword, setShowPassword] = useState(false);
//
//    const navigate = useNavigate();
//
//    const handleChange = (e) => {
//        const { name, value } = e.target;
//        setFormData({ ...formData, [name]: value });
//    };
//
//    const togglePassword = () => {
//        setShowPassword(!showPassword);
//    };
//
//    const handleSubmit = async (e) => {
//        e.preventDefault();
//        try {
//            const response = await axios.post('http://localhost:8000/login/', formData);
//            localStorage.setItem('access', response.data.access);
//            localStorage.setItem('refresh', response.data.refresh);
//            localStorage.setItem('role', response.data.role);
//
//            if (response.data.role === 'prison_officer') {
//                navigate('/prisonOfficeDashboard');
//            } else if (response.data.role === 'admin') {
//                navigate('/adminDashboard');
//            }
//        } catch (error) {
//            console.error(error.response.data);
//            alert('The User does not Exist!');
//        }
//    };
//
//    return (
//        <div className="d-flex flex-column">
//            <div className="container-fluid flex-grow-1 d-flex justify-content-center align-items-center" style={{ height: '85vh' }}>
//                <div className="col-md-6">
//                    <div className="login-form-container rounded-lg border p-4" style={{ maxWidth: '600px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//                        <h1 className="text-center mb-4">Login</h1>
//                        <form onSubmit={handleSubmit} className="login-form">
//                            <div className="form-group">
//                                <div className="input-group">
//                                    <div className="input-group-prepend d-flex align-items-center pr-2">
//                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
//                                    </div>
//                                    <input
//                                        type="text"
//                                        className="form-control"
//                                        id="username"
//                                        name="username"
//                                        placeholder="Username"
//                                        value={formData.username}
//                                        onChange={handleChange}
//                                        required
//                                    />
//                                </div>
//                            </div>
//                            <div className="form-group">
//                                <div className="input-group">
//                                    <div className="input-group-prepend d-flex align-items-center pr-2">
//                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
//                                    </div>
//                                    <input
//                                        type={showPassword ? 'text' : 'password'}
//                                        className="form-control"
//                                        id="password"
//                                        name="password"
//                                        placeholder="Password"
//                                        value={formData.password}
//                                        onChange={handleChange}
//                                        required
//                                    />
//                                    <div className="input-group-append">
//                                        <button
//                                            className="btn btn-outline-secondary"
//                                            type="button"
//                                            onClick={togglePassword}
//                                        >
//                                            {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
//                                        </button>
//                                    </div>
//                                </div>
//                            </div>
//                            <button type="submit" className="btn btn-primary btn-block">Login</button>
//                        </form>
//                    </div>
//                </div>
//            </div>
//            <Footer className="mt-auto"/>
//        </div>
//    );
//};
//
//export default Login;
//

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js';
import './Login.css'; // Import the CSS file
import backgroundImage from '../img/jail.jpg';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login/', formData);
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            localStorage.setItem('role', response.data.role);

            if (response.data.role === 'prison_officer') {
                navigate('/prisonOfficeDashboard');
            } else if (response.data.role === 'admin') {
                navigate('/adminDashboard');
            }
        } catch (error) {
            console.error(error.response.data);
            alert('The User does not Exist!');
        }
    };

    return (
        <div className="background" style={{ height: '92.5vh' }}>
            <div className="container-fluid flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="login-form-container rounded-lg border p-4" style={{ maxWidth: '600px',height: '300px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <h1 className="text-center text-white mb-4">Login</h1>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend d-flex align-items-center pr-2">
                                        <span className="input-group-text text-white"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend d-flex align-items-center pr-2">
                                        <span className="input-group-text text-white" ><i className="fas fa-lock"></i></span>
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn "
                                            type="button"
                                            onClick={togglePassword}
                                        >
                                            {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye text-white"></i>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn bg-info btn-block">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer className="mt-auto"/>
        </div>
    );
};

export default Login;

