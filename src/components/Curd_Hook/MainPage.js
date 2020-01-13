import React,{useContext,useReducer} from 'react';
import {UserContext} from '../../index';

const initialState = {
  count: 0
}
function reducer(state, action){
  
  switch(action.type){
    case "increment":
      return {
        count: state.count + 1
      }
    case "decrement":
      return {
          count: state.count - 1
        }
    case "reset":
          return initialState
      default: 
          return initialState
  }
}
export default function MainPage(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useContext(UserContext)
    return (
        <div>
          Hello, {value} <br/>
          count:{state.count}
          <button className="button m-1" onClick={() => dispatch({type: "increment"})}>Increment</button>
          <button className="button m-1" onClick={() => dispatch({type: "decrement"})}>Decrement</button>
          <button className="button m-1" onClick={() => dispatch({type: "reset"})}>Reset</button>

        </div>
  )
}