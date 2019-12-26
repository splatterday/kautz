import React from 'react';
import graphic from '../img/Page1.png'
import { Component } from 'react';

class Page1 extends Component {
    render() {
        const {eventHandler, currentPage} = this.props;

        return(
            <div className="headsup page1">
                <div className="display-left">
                    <h1>Bomb Calorimetry</h1>
                    <h2>View Problem Statement &#187;</h2>
                    <p>A bomb calorimeter is used to measure the heat transfer of a combustion reaction under constant volume considtions. Heat transferred at constant volume is equal to a change in internal energy.</p>
                    <h3>qV = &#x394;U</h3>
                    <p>The bomb is a rigid, sealed vessel designed so that its volume remains constant (&#x394;V = 0). Under constant volume conditions, no pressure-volume work is done (w = -P&#x394;V = 0) and all of the energy released by the reaction is transferred to the calorimeter as heat.</p>
                    <button onClick={eventHandler} value="2">Next Chapter</button>
                </div>
                <div className="display-right">
                    <img src={graphic} alt="page1"/>
                </div>
            </div>
        );
    }
}

export default Page1;