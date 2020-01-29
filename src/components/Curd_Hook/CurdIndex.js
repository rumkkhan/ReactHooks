import React, {useContext,useReducer} from 'react';
import TodosContext from '../../store/context';
import todosReducer from '../../store/reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm.js'

const App = () => {
    const initialState = useContext(TodosContext)
    const [state,dispatch] =  useReducer(todosReducer, initialState)
    return(
        <TodosContext.Provider value={{state, dispatch}}>
               <TodoForm />
               <TodoList />
        </TodosContext.Provider>
    )
} 

export default function() {
    return(
        <div>
           <App />
        </div>
    )
}