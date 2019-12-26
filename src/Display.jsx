import React from "react";
import Home from "./pages/Home";
import PAGES from './pages';

class Display extends React.Component {

  render() {
    const SelectedPage = PAGES[this.props.currentPage]

    return (
        <div className="display">
            <SelectedPage eventHandler={this.changePage} currentPage={this.props.currentPage}/>
        </div>
    )
  }
}

export default Display;
