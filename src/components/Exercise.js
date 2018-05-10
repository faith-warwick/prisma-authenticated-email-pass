import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'



class Exercise extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <div>
                <header className="tc ph4">
                </header>
                <div className="flex items-center">
                    {/*<span className="gray">{this.props.index + 1}.</span>*/}
                </div>
                <div className="ml1">
                    <div>
                        {this.props.activity.time} ({this.props.activity.intensity})
                    </div>
                    <div className="f6 lh-copy gray">
                        {this.props.activity.postedBy
                            ? this.props.activity.postedBy.name
                            : 'Unknown'}{' '}
                        {timeDifferenceForDate(this.props.activity.createdAt)}
                    </div>
                </div>
            </div>
        )
    }

}

export default Exercise