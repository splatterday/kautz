import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class NavPt extends React.Component {
    handleClick = () => {
        const { path, onClick } = this.props;
        onClick(path);
    }
    render() {
        const { active} = this.props;
        return(
            <div className="navpt" active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    X
                </Link>
            </div>
        );
    }
}

function Stepper() {
    return(
        <div className="stepper">
            <NavPt/>
            <NavPt/>
            <NavPt/>
        </div>
    )
}

export default Stepper;