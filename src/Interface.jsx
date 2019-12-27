import React, { useReducer } from "react";
import Stepper from "./Stepper";
import PAGES from "./pages"

/* Here we are going to use React's context API. This allows us to not pass down
props for multiple generations. Instead, we can pick and choose from the context at the component level
via useContext(). Note that here, we store the navigation event handlers in the context store using the .Provider 
function. Then in each individual Page component, use the .Consumer function and pick the handlers we need for that
page.
*/

export const StateContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        page: state.page + 1
      }
    case 'decrement':
      return {
        ...state,
        page: state.page - 1
      }
    case 'ref':
      return {
        ...state,
        page: state.page
      }
    default:
      throw new Error()
  }
}

export default function Interface(props) {
  const [state, dispatch] = useReducer(reducer, { page: 0 })

  const nextPage = () => {
    debugger
    dispatch({ type: 'increment', page: state.page })
  }

  const prevPage = () => {
    dispatch({ type: 'decrement', page: state.page })
  }

  const changePage = (event) => {
    dispatch({ type: 'ref', page: event.target.value })
  }

  const Display = PAGES[state.page]

  return (
    <div className="app-interface">
      <StateContext.Provider value={{ nextPage, prevPage }}>
        <Display />
        <Stepper eventhandler={changePage} currentPage={state.page} />
      </StateContext.Provider>
    </div>
  )
}

