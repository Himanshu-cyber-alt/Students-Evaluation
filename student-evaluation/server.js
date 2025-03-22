import express from 'express';
import homeRoutes from './routes/homeRoutes.js'; 
import authRoutes from "./routes/authRoutes.js"

const app = express();
const port = 7000;

app.set("view engine", "ejs"); 

app.use(express.static("public"));

app.use('/', homeRoutes);
app.use('/',authRoutes);

app.listen(port, () => {
    console.log(`${port} Server Is Started`);
});





