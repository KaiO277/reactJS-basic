import React from 'react';
import './Nav.scss'; // Assuming you have a CSS file for styling
import { Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} exact="true">
                    Home
                </NavLink>
                <NavLink to="/todos" className={({ isActive }) => (isActive ? 'active' : '')}>
                    To Do List
                </NavLink>
                <NavLink to="/example" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Example
                </NavLink>
            </div>
        );
    }
}

export default Nav;