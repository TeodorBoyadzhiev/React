import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavCategory() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Cat">Cat</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Dog">Dog</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Parrot">Parrot</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Reptil">Reptile</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Other">Other</NavLink></li>
            </ul>

            <style jsx>{`
               .nav-link-selected{
                   background-color: lightgreen !important;
               }
            `}</style>
        </nav>

    )
}
