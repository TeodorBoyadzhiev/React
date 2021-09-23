import React from 'react'

function Register() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>
                Register page
            </h1>

            <input style={{ margin: "5px", padding: "5px" }} placeholder="Username..."></input><br></br>
            <input style={{ margin: "5px", padding: "5px" }} placeholder="Password..."></input><br></br>
            <input style={{ margin: "5px", padding: "5px" }} placeholder="Repeat Password..."></input><br></br>

            <button style={{
                marginTop: "10px",
                padding: "7px 15px",
                backgroundColor: "green",
                borderRadius: "5px",
                fontSize: "20px"
            }}>
                Register
            </button>
        </div>
    )
}

export default Register
