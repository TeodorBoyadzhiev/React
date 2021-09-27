import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavCategory() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Cats">Cats</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Dogs">Dogs</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Parrots">Parrots</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Reptils">Reptiles</NavLink></li>
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
