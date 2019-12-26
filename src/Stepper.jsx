import React from 'react';
// import NavPt from './NavPt';

const Stepper = ({eventHandler, pages, currentPage}) => {
    // console.log(eventHandler);
    return (
      /* Then here we can just map out the keys of the PAGES array to individual NavPt components like so:
      {Object.keys(pages).map(n => <NavPtr key={n} currentPage={n} onClick={changePage} />)}
      */
      <div className="stepper">
        <button onClick={eventHandler} value="0" className={currentPage === '0' ? 'active': ''}/>
        <button onClick={eventHandler} value="1" className={currentPage === '1' ? 'active': ''}/>
        <button onClick={eventHandler} value="2" className={currentPage === '2' ? 'active': ''}/>
        <button onClick={eventHandler} value="3" className={currentPage === '3' ? 'active': ''}/>
        <button onClick={eventHandler} value="4" className={currentPage === '4' ? 'active': ''}/>
      </div>
    );
  };

export default Stepper;