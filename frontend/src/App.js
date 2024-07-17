
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import PrisonOfficeDashboard from './components/PrisonOfficeDashboard';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddInmate from './components/AddInmate';
import Viewinmate from './components/Viewinmate';

const PrivateRoute = ({ element: Element, role, ...rest }) => {
    const isAuthorized = localStorage.getItem('access') && localStorage.getItem('role') === role;

    return isAuthorized ? <Element {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/prisonOfficeDashboard" element={<PrivateRoute element={PrisonOfficeDashboard} role="prison_officer" />} />
                <Route path="/view-inmates" element={<PrivateRoute element={Viewinmate} role="prison_officer" />} />
                <Route path="/add-inmate" element={<AddInmate />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
