import React from 'react';

function BtnNext({eventHandler, currentPage}) {
    const value = 1+parseInt(currentPage);
    console.log(value);
    console.log(eventHandler);
    return (
        <React.Fragment>
            <button onClick={eventHandler} value={value}>Next Chapter</button>
        </React.Fragment>
    )
}

export default BtnNext;