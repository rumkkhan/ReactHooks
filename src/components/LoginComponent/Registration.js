import React,{useState} from 'react';

const initialState = {
    username: "",
    email: "",
    password:""
}

export default function Registration() {

    const [form, setForm] = useState(initialState)
    const [user, setUser] = useState('');
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
   const handleSubmit = e => {
       e.preventDefault();   
      setUser(form)
      setForm(initialState)
     
   }

    return(
        <div
           style={{textAlign:"center"}}
        >
        <h2>Registration</h2>
        <form
        style={{
            display:"grid",
            alignItems: "center",
            justifyContent: "center"
        }}
        onSubmit={handleSubmit}
        >
        <input type="text"  onChange={handleChange} value={form.username} placeholder="username" name="username"/>
        <input type="email" onChange={handleChange} value={form.email} placeholder="email" name="email"/>
        <input type="password" onChange={handleChange} value={form.password} placeholder="password" name="password"/>
        <button>Submit</button>
        {user && JSON.stringify(user,null,2)}
        </form>
        </div>

    )
}