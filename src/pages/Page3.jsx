import React, { useContext } from 'react';
import { StateContext } from '../Interface'

export default function Page3(props) {
    const { nextPage, prevPage } = useContext(StateContext)
    return(
        <React.Fragment>
                <h1>Page 3</h1>
                    <button onClick={prevPage}>Previous Chapter</button>
                    <button onClick={nextPage}>Next Chapter</button>
        </React.Fragment>
    );
}