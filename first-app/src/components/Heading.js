import './Heading.css';
import { NavLink } from 'react-router-dom';

function Heading(props) {

    return (
        <header style={{ display: "flex" }}>
            <nav>
                <ul className="nav">
                    <NavLink className="li" activeClassName="active-navigation" exact={true} to="/">Home</NavLink>
                    <NavLink className="li" activeClassName="active-navigation" exact={true} to="/content">Conetent</NavLink>
                    <NavLink className="li" activeClassName="active-navigation" exact={true} to="/register">Register</NavLink>
                    <NavLink className="li" activeClassName="active-navigation" exact={true} to="/login">Login</NavLink>
                </ul>
            </nav>

        </header>
    );
}




export default Heading;