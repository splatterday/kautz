import React from 'react';


// class Home extends Component {
//     render() {
//         const {eventHandler, currentPage} = this.props;
//         return (
//         <div className="headsup home">
//             <div className="display-left">
//                 <h1>Home</h1>
//                 <h2>Welcome to the app!</h2>
//                 <p>Here you will learn all kinds of shit...</p>
//                 <button onClick={eventHandler} value="1">Let's get Started!</button>
//             </div>
//             <div className="display-right">
//             </div>
//         </div>
//         )
//     }
// }

function Home({nxtPage, currentPage}) {
    // console.log(currentPage);
    return (
        <div className="headsup home">
            <div className="display-left">
                <h1>Home</h1>
                <h2>Welcome to the app!</h2>
                <p>Here you will learn all kinds of shit...</p>
                {/* <button onClick={eventHandler} value={(currentPage++)}>Let's get Started!</button> */}
                <button onClick={nxtPage}>Next Chapter</button>
            </div>
            <div className="display-right">
            </div>
        </div>
    )
}

export default Home;