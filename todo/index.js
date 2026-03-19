import express from 'express';
import router from './routes.js'
const app = express();

app.get('/', (req,res) =>{
 res.send('apis is running...')
})

app.use('/notes', router);

app.listen(5000)