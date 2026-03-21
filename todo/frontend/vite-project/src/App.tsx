import { useState } from "react";
import { Link} from "react-router-dom";

import "./style.css";

function App() {
interface Todo{
    id:number;
    title:string;
    description:string;
}
   const [todos, settodos] = useState<Todo[]>([]);
    const [todo,settodo] = useState({
        title:'',
        description:''
    });
    

     const createatodo = async () =>{
        const res = await fetch('http://localhost:5000/todos/create',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
             body : JSON.stringify(todo)
            })
        console.log(await res.json())
     }

     const getalltodos = async () =>{
        const res = await fetch('http://localhost:5000/todos/')
        const result= await res.json()
        console.warn(result)
        settodos(result)

     }

  return (
    <>

 
      <div className="container">
    
        <Link to="/todos"><button className="button" onClick={getalltodos}>getalltodos</button></Link>
        <Link to="/todos/create"><button className="button">createatodo</button></Link>
        <Link to="/todos/:id"><button className="button">getatodobyID</button></Link>
        <Link to="/todos/:id"><button className="button">deleteatodobyID</button></Link>
        <Link to="/todos/:id"><button className="button">updateatodobyID</button></Link>
       {todos? todos.map((todo)=>(
        <div key={todo.id} className="todo">
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
        </div>
       )) : 'no todos found'

       }
        <div className="form"> 
        <input placeholder="Enter title"value={todo.title}  onChange={(e)=>{ settodo(prev =>({...prev, title: e.target.value}))}}  />
        <input placeholder="Enter description" value={todo.description} onChange={(e)=>{settodo((prev)=>({...prev, description: e.target.value}))}}/>
        <button className="button" onClick={createatodo}>submit</button>
       </div>
      </div>
            
   
      
    </>
  );
}
export default App;
