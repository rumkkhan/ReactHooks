import React,{useContext} from 'react';
import TodosContext from '../../store/context';


export default function TodoList() {
    const {state,dispatch} = useContext(TodosContext);
    const title = state.todos.length > 0 ? `${state.todos.length}: Todos`: "No Todos"
        return(
            
            <div className="container mx-auto max-w-md text-center font-mono">             
                   <h1 className="text-bold">{title}</h1>
                <ul className="list-disc p-0">
                    {
                        state.todos.map(todo => (
                            <li className="flex items-center bg-orange-200 border-black border-dashed my-4 border-2" key={todo.id}>
                                <span 
                                onDoubleClick={() => dispatch({type: "Toggle_TODO", payload: todo})}
                                className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey"}`}>{todo.text}</span>
                                <button><img onClick={() => dispatch({type: "SET_CURRENT_TODO", payload: todo})} src="https://icon.now.sh/edit/0050cc5" alt="Edit Icon" className="H-6 cursor-pointe"/></button>
                                <button><img onClick={() => dispatch({type: "REMOVE_TODO",payload:todo})} src="https://icon.now.sh/delete/0050cc5" alt="Deletet Icon" className="H-6 cursor-pointe"/></button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
}