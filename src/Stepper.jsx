import React from 'react';
import NavPt from './NavPt';

const Stepper = ({eHandler, pages}) => {
    return (
      /* Then here we can just map out the keys of the PAGES array to individual NavPt components like so:
      {Object.keys(pages).map(n => <NavPtr key={n} currentPage={n} onClick={changePage} />)}
      */
      <div className="stepper">

        {/* <button onClick={eHandler} value="1" className={this.state.value === '1' ? 'active': ''}/> */}
        <button onClick={eHandler} value="1"/>
        <button onClick={eHandler} value="2"/>
        <button onClick={eHandler} value="0"/>
      </div>
    );
  };

export default Stepper;