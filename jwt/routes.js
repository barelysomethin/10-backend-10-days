import { Router } from "express";
import {signup ,login } from './controller.js'
const router = Router();

router.get('/',(req,res)=>{
res.send('this is the hello fromt the route')
})

router.post('/signup', signup)
router.post('/login',login)

export default router;