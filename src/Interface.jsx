import React from "react";
// import Display from "./Display";
import Stepper from "./Stepper";
import PAGES from './pages'


class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "0"
    };
    this.changePage = this.changePage.bind(this)
  }


  changePage(event) {
      console.log(event.target.value);
      this.setState({ currentPage: event.target.value });
  }

  render() {
    //PAGES contains all the components right? 
    // they are indexed by the corresponding keys.. 
    // the current key is stored in state, each click 
    // changes the key which we use to reference the 
    // value of which is a react component
      const Display = PAGES[this.state.currentPage]
      // console.log(`currentPage: ${this.state.currentPage}`)
      // console.log(`0 Index: ${PAGES[0]}`)
      // console.log(typeof Display)
    return (
      <div className="app-interface">
        <Display />
        <Stepper eHandler={this.changePage} pages={PAGES} />
      </div>
    );
  }
}
export default Interface;
