import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import {router} from './routes/routes';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/",router);
app.use("/add",router);
app.use("/sub",router);
app.use("/mul",router);
app.use("/div",router);
app.use("/log",router);
app.use("/sqrt",router);
app.use("/pow",router);



app.listen(port,()=>{
    console.log(`I am listening at port number ${port}`);
})


