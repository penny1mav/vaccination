import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    //δημιουργουμε τους Linkers Που μας παραπεμπουν σε διαφρετική σελίδα
    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/news" className="navbar-item">News</Link>
            <Link to="/faq" className="navbar-item">FAQ</Link>
            <Link to="/appoinment" className="navbar-item">Appoinment</Link>
            <Link to="/statistics" className="navbar-item">Statistics</Link>
            <Link to="/contact" className="navbar-item">Contact Us</Link>

        </section>
    )
}

export default Navbar;