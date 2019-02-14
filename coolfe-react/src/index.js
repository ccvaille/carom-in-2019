import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const UserGreeting = () => <h2>Hello coolfe</h2>;

const GuestGreeting = () => <h2>Hello guest</h2>;

const LoginBtn = props => <button onClick={props.onClick}>Login</button>;

const LogoutBtn = props => <button onClick={props.onClick}>Logout</button>;

const Greeting = props => {
    const isLoginIn = props.isLoggedIn;
    if(isLoginIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

const message = [{
    id: 1,
    text: 'React'
  },
  {
    id: 2,
    text: 'Re: React'
  },
  {
    id: 3,
    text: 'Re:Re: React'
  }];


class App extends Component {
    state = {
        isLoggedIn : false,
        username: '',
        email: ''
    }
    handleLoginClick = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleClick = (e) => {
        console.log(this.state.username, this.state.email);
        e.preventDefault();
        this.setState({
          username: '',
          email: ''
        });
    }
    render() {
        const { isLoggedIn } = this.state;
        return (
          <div>
            <h1>Condition</h1>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
              <LogoutBtn onClick={this.handleLogoutClick} />
            ) : (
              <LoginBtn onClick={this.handleLoginClick} />
            )}
            <hr />
            <h1>Loop</h1>
            <ul>
              {message.map(i => (
                <li key={i.id}>{i.text}</li>
              ))}
            </ul>
            <hr />
            <h1>Form</h1>
            <p>
              Username :{" "}
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
              />
            </p>
            <p>
              email :{" "}
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </p>
            <p>
              <button onClick={this.handleClick}>submit</button>
            </p>
          </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
