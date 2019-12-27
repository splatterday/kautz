import React from 'react';

export default function Page4({prvPage}) {
    return(
        <React.Fragment>
                <h1>Page 4</h1>
                <button onClick={prvPage}>Previous Chapter</button>
        </React.Fragment>
    );
}