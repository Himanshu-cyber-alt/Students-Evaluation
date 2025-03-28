import express from 'express'
import bodyParser from 'body-parser';
import pool from '../config/db.js';
const router = express.Router();
router.use(bodyParser.urlencoded({extended : true}))



router.get('/login',  (req,res)=>{
 
    res.render('login.ejs')
})


router.post('/login', async (req,res)=>{

    try{
    const {RollNumber,Password} = req.body;

    const result = await pool.query('select roll_number,password from students where roll_number = $1',[RollNumber])
    const roll = result.rows[0].roll_number;
    const pass = result.rows[0].password;

          
     if(RollNumber == roll && pass == Password ){

        res.render('about.ejs')
    }else{
        res.render('register.ejs')
    }
     

} catch(error){
    console.log(error);
    res.status(500).send("Error for register"); 
}
 

})
export default router;
