import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'
import { Link } from 'react-router-dom'
class Login extends Component {

    state = {
        email: 'murphy@potts.com',
        password: 'password'

    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    signIn = (e) => {
        e.preventDefault()
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.signIn(payload)
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.signIn}>
                    <div>
                        <label>Email </label>
                        <input onChange={this.handleChange} value={this.state.email} name='email' />
                    </div>
                    <div>
                        <label>Password </label>
                        <input onChange={this.handleChange} value={this.state.password} name='password' />
                    </div>
                    <button>Login</button>
                </form>
                <Link to='/signUp'>Sign up</Link>
            </div>
        );
    }
}



export default connect(null, { signIn })(Login);