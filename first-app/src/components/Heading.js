import './Heading.css';

function Heading(props) {

    return (
        <header style={{ display: "flex" }}>
            <nav>
                <ul>
                    <li style={{ listStyle: "none" }}>Home</li>
                    <li style={{ listStyle: "none" }}>About Us</li>
                    <li style={{ listStyle: "none" }}>Register</li>
                    <li style={{ listStyle: "none" }}>Login</li>
                </ul>
            </nav>
        </header>
    );
}

export default Heading;