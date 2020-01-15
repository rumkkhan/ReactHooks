import React,{useContext, useReducer} from 'react';
import {UserContext}  from './FirstPage'

const initialState  = {
  count: 0
}
function reducer(state = initialState, action){
  switch(action.type){
    case "increment":
      return{
        count: state.count + 1
      }
    case "decrement":
       return {
         count: state.count - 1
       }
    case "reset": 
       return initialState;    
      default: 
       return initialState;
  }
} 

export default function MainPage(){
   const [state,dispatch] = useReducer(reducer,initialState);
  const value  = useContext(UserContext);
    return (
        <div>       
          Count:{state.count}   
             <button class="btn border p-1" onClick={() => dispatch({type: "increment"})}>Increment</button>
             <button class="btn border p-1" onClick={() => dispatch({type: "decrement"})}>Decrement</button>
             <button class="btn border p-1" onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
  )
}