import React, { Component } from 'react';
import Header from './Header'
import ExerciseList from './ExerciseList';
import Landing from './Landing';
import { Switch, Route } from 'react-router-dom'
import CreateLink from './CreateExercise'
import Login from './Login'
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="center w85">
                <Header />
                <div className="ph3 pv1 background-gray">
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/home" component={ExerciseList} />
                        <Route exact path="/create" component={CreateLink} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
