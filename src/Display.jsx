import React from 'react';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

class Display extends React.Component {
   
    render() {
        const page = this.props.currentPage;
        let display;

        if ( page === "home" ) {
            display = <Home/>
        } else if( page === "page1") {
            display = <Page1/>
        } else if( page === "page2" ) {
            display = <Page2/>
        }

        return(
            <div className="app-display">
                {display}
            </div>
        )
    }
}

export default Display;