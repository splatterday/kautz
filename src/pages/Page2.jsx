import React from 'react';

export default function Page2({prvPage, nxtPage}) {
    return(
        <React.Fragment>
        <h1>Page 2</h1>
                    <button onClick={prvPage}>Previous Chapter</button>
                    <button onClick={nxtPage}>Next Chapter</button>
        </React.Fragment>
    );
}