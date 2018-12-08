import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUp } from '../../actions/authActions'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    signUp = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        this.props.signUp(payload)
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.signUp}>
                    <div>
                        <label>Email </label>
                        <input onChange={this.handleChange} value={this.state.email} name='email' />
                    </div>
                    <div>
                        <label>Password </label>
                        <input onChange={this.handleChange} value={this.state.password} name='password' />
                    </div>
                    <div>
                        <label>Password Confirmation</label>
                        <input onChange={this.handleChange} value={this.state.password_confirmation} name='password_confirmation' />
                    </div>
                    <button>Sign Up</button>
                </form>
                <Link to='/login'>Login</Link>
            </div>
        );
    }
}


export default connect(null, { signUp })(SignUp);