import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

class Login extends Component {
    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        name: '',
    }

    render() {
        return (


            <article className='pa4 black-80'>
                <h4 className="mv3">{this.state.login ? 'Login' : 'Sign Up'}</h4>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="ph0 mh0 fw6 clip">{this.state.login ? 'Login' : 'Sign Up'}</legend>
                </fieldset>
                <div className="flex flex-column">
                    {!this.state.login && (
                        <input
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                            type="text"
                            placeholder="Username"
                        />
                    )}
                    <input
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        type="text"
                        placeholder="Email address"
                    />
                    <input
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        type="password"
                        placeholder="Safe password"
                    />
                </div>
                <div className="flex mt3">
                    <div className="pointer mr2 button" onClick={() => this._confirm()}>
                        {this.state.login ? 'login' : 'create account'}
                    </div>
                    <div
                        className="pointer button"
                        onClick={() => this.setState({ login: !this.state.login })}
                    >
                        {this.state.login
                            ? 'need to create an account?'
                            : 'already have an account?'}
                    </div>
                </div>
            </article>
        )
    }

    _confirm = async () => {
        const { name, email, password } = this.state
        if (this.state.login) {
            const result = await this.props.loginMutation({
                variables: {
                    email,
                    password,
                },
            })
            const { token } = result.data.login
            this._saveUserData(token)
        } else {
            const result = await this.props.signupMutation({
                variables: {
                    name,
                    email,
                    password,
                },
            })
            const { token } = result.data.signup
            this._saveUserData(token)
        }
        this.props.history.push(`/`)
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export default compose(
    graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
    graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
)(Login)