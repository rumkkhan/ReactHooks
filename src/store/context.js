import React from 'react';

 const TodosContext = React.createContext({
    todos:[
        {id:1,text: "Eat BreakFast", complete: false},
        {id:2,text: "Do laundry", complete: false},
        {id:3,text: "Finish Project", complete: true},

    ]
})

export default  TodosContext