import express from "express"
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('home.ejs')
})

router.get('/register',(req,res)=>{
    res.render('register.ejs')
})

export default router;