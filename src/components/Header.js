import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'


class Header extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <nav className="pa3 pa4-ns">
                <a className="dark-green b f1 f-headline-ns tc db mb3 mb4-ns" title="Home">Purrfect Health</a>
                <div className="tc pb3">
                    {authToken && (
                        <Link to='/home' className="link dim gray f6 f5-ns dib mr3" title="create post">Home</Link>
                    )}
                    {authToken && (
                        <Link to='/create' className="link dim gray f6 f5-ns dib mr3" title="create post">Create Post</Link>
                    )}
                    {authToken ? (
                        <div
                            className="link dim gray f6 f5-ns dib mr3"
                            onClick={() => {
                                localStorage.removeItem(AUTH_TOKEN)
                                this.props.history.push(`/`)
                            }}
                        >
                            Logout
                        </div>
                    ) : (
                        <Link to='/login' className="link dim gray f6 f5-ns dib mr3" title="login">Login</Link>
                    )}

                </div>
            </nav>
        )
    }

}

export default withRouter(Header)