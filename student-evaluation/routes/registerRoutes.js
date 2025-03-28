import express from "express";
import bodyParser from "body-parser";
import pool from "../config/db.js";

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));




  
 

routes.post('/register', async (req, res) => {
    try {


        const { Name, Password,RollNumber } = req.body;

        const result = await pool.query('select * from students where roll_number = $1',[RollNumber])

        if(result.rows.length>0){
            console.log(result)
            res.send("RollNumber is already exits")
        }else{
         const result2 = await pool.query('INSERT INTO students(name,roll_number,password) VALUES ($1,$2,$3)', [Name,RollNumber,Password]);
          console.log(result2)
        res.render('home.ejs'); 
        }
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(500).send("Error for register"); 
        }
    }
});

export default routes;
