import express from 'express';
import router from './routes.js'
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/jwt', router)

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})