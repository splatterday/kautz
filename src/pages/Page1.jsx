import React, { useState } from 'react';
import graphic from '../img/Page1.png'

// const mystyle = {
//     background: 'url(' + graphic + ')',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundColor: "blue",
// }

export default function Page1() {
    const [currentPage, changePage] = useState(0);
    console.log(currentPage);
    return(
        <div className="headsup page1">
            <div className="display-left">
                <h1>Bomb Calorimetry</h1>
                <h2>View Problem Statement &#187;</h2>
                <p>A bomb calorimeter is used to measure the heat transfer of a combustion reaction under constant volume considtions. Heat transferred at constant volume is equal to a change in internal energy.</p>
                <h3>qV = &#x394;U</h3>
                <p>The bomb is a rigid, sealed vessel designed so that its volume remains constant (&#x394;V = 0). Under constant volume conditions, no pressure-volume work is done (w = -P&#x394;V = 0) and all of the energy released by the reaction is transferred to the calorimeter as heat.</p>
                <button onClick={() => changePage(currentPage + 1)}/>
            </div>
            <div className="display-right">
                <img src={graphic}/>

            </div>
        </div>
    );
}