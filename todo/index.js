import express from 'express';
import cors from 'cors'
import router from './routes.js'
const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req,res) =>{
 res.send('apis is running...')
})

app.use('/todos', router);

app.listen(5000)