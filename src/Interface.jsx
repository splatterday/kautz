import React, { useState, useReducer } from "react";
import Stepper from "./Stepper";
import Display from "./Display"

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

function Interface(props) {
  // const [currentPage, setCurrentPage] = useState(0)
  const [state, dispatch] = useReducer(reducer, {page: 0})

  const nextPage = () => {
    dispatch({type: 'increment', page: state.page})
  }

  const prevPage = () => {
    dispatch({type: 'decrement', page: state.page})
  }

  const changePage = (event) => {
    dispatch({type: 'ref', page: event.target.value})
  }

  return (
    <div className="app-interface">
        <Display nxtPage={nextPage} prvPage={prevPage} currentPage={state.page}/>
        <Stepper eventHandler={changePage} currentPage={state.page} />
    </div>
  )
}

export default Interface;
