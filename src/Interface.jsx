import React from 'react';
import Display from './Display';
import Stepper from './Stepper';
import { Router } from 'react-router-dom';

class Interface extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "home",
        }
    }

    render() {
        return(
            <div className="app-interface">
                <Router>
                    <Display/>
                    <Stepper/>
                </Router>
            </div>
        )
    }
}

export default Interface;