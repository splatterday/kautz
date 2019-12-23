import React from "react";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

/* For example:
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
const PAGES = { 
    1: Page1
    2: Page2
}

render() {
    if !(this.props.selectedPage) {
        return null
    }

    const SelectedPage = PAGES[this.props.selectedPage]
    return (
        <React.Fragment>
            <SelectedPage />
        </React.Fragment>
    )
}
Anyhow, it isn't working on my end for some reason.. maybe because I am using an OSS versi
on of VSCODE or because I am on linux

Let me restart once just to see
*/



class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };
  }

  render() {
    const page = this.state.currentPage;
    let display;

    if (page === "home") {
      display = <Home />;
    } else if (page === "page1") {
      display = <Page1 />;
    } else if (page === "page2") {
      display = <Page2 />;
    }

    return (
      <div className="app-display">
        {display}
        {display}
      </div>
    );
  }
}

export default Display;
