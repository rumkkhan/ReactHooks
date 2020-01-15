import React, {useState,useContext,useEffect} from 'react';
import TodosContext from '../../store/context';


export default function TodoForm(){
    const [todo,setTodo] = useState("")
    const {state:{currentTodo = {}},dispatch} = useContext(TodosContext);

    useEffect(() => {
        if(currentTodo.text){
            setTodo(currentTodo.text)
        }
        else {
            setTodo("")
        }
    },[currentTodo.id])

    const handleSave = (e) => {
        e.preventDefault();

        if(currentTodo.text){
            dispatch({type: "UPDATE_TODO",payload: todo})
        }else {
            dispatch({type:"ADD_TODO",payload: todo})
        }
        setTodo("")
        
    }
    return (
        <div className="flex justify-center">


            <input type="text" 
            className="border-black border-solid border-2 form-control"
             placeholder="To Do" 
             onChange={event => setTodo(event.target.value)}
             value={todo}
             />     
            <button onClick={handleSave} style={{background:"red"}}>Save</button>

        </div>
       
    )
}