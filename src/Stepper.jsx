import React from 'react';

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

    changePage() {
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

export default Stepper;