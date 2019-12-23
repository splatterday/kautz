import React from 'react';
import Display from './Display';
import Stepper from './Stepper';

class Interface extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "home",
        }
    }

    render() {
        return(
            <div className="app-interface">
                <Display currentPage={this.state.currentPage}/>
            </div>
        )
    }
}

export default Interface;