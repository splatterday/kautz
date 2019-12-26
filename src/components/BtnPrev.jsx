import React from 'react';

function BtnPrev({eventHandler, currentPage}) {
    const value = parseInt(currentPage)-1;
    console.log(value);
    console.log(eventHandler);
    return (
        <React.Fragment>
            <button onClick={eventHandler} value={value}>Previous Chapter</button>
        </React.Fragment>
    )
}

export default BtnPrev;