import React, { useContext } from 'react';
import { StateContext } from '../Interface'

export default function Page4(props) {
    const { prevPage } = useContext(StateContext)
    return(
        <React.Fragment>
                <h1>Page 4</h1>
                <button onClick={prevPage}>Previous Chapter</button>
        </React.Fragment>
    );
}