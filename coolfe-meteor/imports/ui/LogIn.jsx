import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </div>
                This is login page.
            </div>
        )
    }
}

export default Login;