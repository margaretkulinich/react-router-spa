import React from 'react';
import { NavLink } from "react-router-dom";
import "./styles.css";
  


export default function NavComponent() {
    return (
        <nav className="nav-component">
            <NavLink to='/' className="nav-link">Main</NavLink>
            <NavLink to='/feed' className="nav-link">Feed</NavLink>
            <NavLink to='/photo' className="nav-link">Photo</NavLink>
            <NavLink to='/contacts' className="nav-link">Contacts</NavLink>
        </nav>
    )
}