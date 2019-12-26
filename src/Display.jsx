import React from "react";
import Home from "./pages/Home";
import PAGES from './pages';

class Display extends React.Component {

  render() {
    const SelectedPage = PAGES[this.props.currentPage]
    console.log(this.props.eventHandler);
    return (
        <div className="display">
            <SelectedPage eventHandler={this.props.eventHandler} currentPage={this.props.currentPage}/>
        </div>
    )
  }
}

export default Display;
