import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ACTIVITY_QUERY } from './ExerciseList'

class CreateLink extends Component {
    state = {
        intensity: '',
        time: '',
    }

    render() {
        return (
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={this.state.intensity}
                        onChange={e => this.setState({ intensity: e.target.value })}
                        type="text"
                        placeholder="Workout type"
                    />
                    <input
                        className="mb2"
                        value={this.state.time}
                        onChange={e => this.setState({ time: e.target.value })}
                        type="text"
                        placeholder="Time"
                    />
                </div>
                <button onClick={() => this._createLink()}>Submit</button>
            </div>
        )
    }


    _createLink = async () => {
        const { time, intensity } = this.state
        await this.props.postMutation({
            variables: {
                time,
                intensity
            }
        })
    }

}

const POST_MUTATION = gql`
  # 2
  mutation PostMutation($intensity: Int!, $time: Int!) {
    post(intensity: $intensity, time: $time) {
      id
      createdAt
      time
      intensity
       postedBy {
        id
        name
      }
    }
  }
`

// 3
export default graphql(POST_MUTATION, { name: 'postMutation' })(CreateLink)
