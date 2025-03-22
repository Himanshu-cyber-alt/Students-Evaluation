import express from "express";
import bodyParser from "body-parser";
import pool from "../config/db.js";

const routes = express.Router();
routes.use(bodyParser.urlencoded({ extended: true }));



 async function test(){
  const ans = await pool.query('select * from students')
  console.log(ans.rows);
  
 }

routes.post('/register', async (req, res) => {
    try {
        const { Name, Password } = req.body;
        await pool.query('INSERT INTO students(name, password) VALUES ($1, $2)', [Name,Password]);

        res.render('home.ejs'); 
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(500).send("Error for register"); 
        }
    }
});

export default routes;
