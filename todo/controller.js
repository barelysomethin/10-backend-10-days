

const todos =[];

export const getAlltodos = (req,res)=>{
   res.send(todos)
}

export const createTodo =(req,res) =>{
  const  {title, description} = req.body;
    const newTodo = {   
        id: Date.now(),
        title : title,
        description: description
    }
    todos.push(newTodo)

 res.json('todo created')

}


export const gettodobyid=(req,res)=>{
 const id = req.params.id;
 const todo = todos.find((t)=> t.id ===id)
 if(todo){
 res.send(todo)
 }
 else {
   res.send('todo not found')
 }
}

