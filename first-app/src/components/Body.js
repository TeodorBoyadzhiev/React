import { Component } from "react";

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5,
        }
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h3 style={{textAlign:"center"}}>Counter</h3>
                <button style={{marginRight:"5px"}} onClick={(e) => this.setState((oldState) => ({ count: oldState.count - 1 }))}>-</button>
                <span>{this.state.count}</span>
                <button style={{marginLeft:"5px"}} onClick={(e) => this.setState((oldState) => ({ count: oldState.count + 1 }))}>+</button>
            </div>
        );
    }
}

export default Body;