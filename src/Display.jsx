import React from "react";
import PAGES from './pages';

function Display({currentPage, nxtPage, prvPage}) {
    const SelectedPage = PAGES[currentPage]
    return (
        <div className="display">
            <SelectedPage nxtPage={nxtPage} prvPage={prvPage} />
        </div>
    )
}

export default Display;
