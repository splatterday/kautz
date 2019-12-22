import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function Display() {
    return(
        <div className="app-display">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </Switch>
        </div>
    )
}

export default Display;