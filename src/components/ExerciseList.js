import React, { Component } from 'react'
import Exercise from './Exercise'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import fatcat from  './fat cat.png'

class ExerciseList extends Component {
    render() {

        if (this.props.feedQuery && this.props.feedQuery.error) {
            return <div>Error</div>
        }

        // 3
        // const linksToRender2 = this.props.feedQuery.activity
        const linksToRender2 = [
            {
                id: '3',
                time: '40  min',
                intensity: 'Running',
                postedBy: { name: 'Warwifg'},
                createdAt: '2018-05-07 13:10:02.047'
            },
            {
                id: '2',
                time: '90  min',
                intensity: 'Hike',
                postedBy: { name: 'Warwifg'},
                createdAt: '2018-05-06 13:10:02.047'
            },
            {
                id: '1',
                time: '30 min',
                intensity: 'Running',
                postedBy: { name: 'Warwifg'},
                createdAt: '2018-05-04 13:10:02.047'
            },
        ]

        return (
            <header className="tc ph4">
                <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
                    Fat Cat
                </h1>
                <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    Your cat's been pretty lazy.
                </h2>
                <img src={fatcat} />
            <div>{linksToRender2.map(activity => <Exercise key={activity.id} activity={activity} />)}</div>
            </header>
        )
    }
}

const FEED_QUERY = gql`
  # 2
  query FeedQuery {
      activity {
        id
        createdAt
        time
        intensity
      }
  }
`

// 3
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (ExerciseList)