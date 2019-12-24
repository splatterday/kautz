import React from "react";
import Home from "./pages/Home";
import PAGES from './pages';

class Display extends React.Component {

  render() {
    const SelectedPage = PAGES[this.props.currentPage]

    return (
        <div className="display">
            <SelectedPage/>
        </div>
    )
  }
}

export default Display;
