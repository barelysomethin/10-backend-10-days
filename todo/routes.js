import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.send('here will be all notes')
})

router.get('/:id',(req,res)=>{
    res.send(`here will be note with id ${req.params.id}`)
})

router.post('/',(req,res)=>{
    res.send('note created')
})
router.put('/:id', (req,res)=>{
    res.send('note will be updated')
})
router.delete('/:id', (req,res)=>{
    res.send('note will be deleted')
})

export default router;