import { useState } from "react";
import { api } from "../api";

function taskForm({ onAdd}) {
    const [title , setTitle] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!title) return;
        const {data} = await api.post('/tasks' , {title});
        onAdd(data);
        setTitle('')
    }



  return (
    <div style={{display: "flex", flexDirection: 'column', justifyContent : "center", alignItems : "center"} }>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} 
        placeholder="New Task"/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default taskForm
