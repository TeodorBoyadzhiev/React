import './Heading.css';
import { Link } from 'react-router-dom';

function Heading(props) {

    return (
        <header style={{ display: "flex" }}>
            <nav>
                <ul className="nav">
                    <li style={{ listStyle: "none" }}><Link to="/">Home</Link></li>
                    <li style={{ listStyle: "none" }}><Link to="/content">Content</Link></li>
                    <li style={{ listStyle: "none" }}><Link to="/register">Register</Link></li>
                    <li style={{ listStyle: "none" }}><Link to="/login">Login</Link></li>
                </ul>
            </nav>
           
        </header>
    );
}



export default Heading;