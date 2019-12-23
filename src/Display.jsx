import React from 'react';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

class NavPt extends React.Component {
    handleClick = () => {
        const { path, onClick } = this.props;
        onClick(path);
        this.setState({currentPage: this.props.currentPage}) 
    }
    render() {
        // if(this.state.active) {
        //     {active}
        // }
        return(
            <div className="navpt">
                <a href={this.props.path} onClick={this.handleClick}>X</a>
            </div>
        );
    }
}

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "home",
        }
    }

    changePage(props) {
        this.setState({currentPage: this.props.currentPage})
    }

    render() {
        return(
            <div className="stepper">
                <NavPt currentPage="page1" onClick={this.changePage}/>
                <NavPt currentPage="page2" onClick={this.changePage}/>
                <NavPt currentPage="home" onClick={this.changePage}/>
            </div>
        )
    }
}

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
                <Stepper/>
            </div>
        )
    }
}

export default Display;