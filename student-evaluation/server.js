import express from 'express';
import homeRoutes from './routes/homeRoutes.js'; 
import registerRoutes from "./routes/registerRoutes.js"
import aboutRoutes from './routes/aboutRoutes.js'
import loginRoutes from './routes/loginRoutes.js'

const app = express();
const port = 7000;

app.set("view engine", "ejs"); 

app.use(express.static("public"));

app.use('/', homeRoutes);
app.use('/',registerRoutes);
app.use('/',aboutRoutes)
app.use('/',loginRoutes)

app.listen(port, () => {
    console.log(`${port} Server Is Started`);
});





