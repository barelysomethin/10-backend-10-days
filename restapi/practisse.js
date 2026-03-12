import express from 'express';

const app= express();

app.get('/', (req,res)=>{
    res.send(`
        <h1>Hello, World! </h1>
        <p>Welcome to my REST API built with Express.js.</p>
        
        
        `)
})

app.listen(3000)