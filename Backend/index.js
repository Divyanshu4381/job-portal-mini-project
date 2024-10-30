import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.routes.js';
import companyRoute from './routes/company.route.js';
import applicationRoute from './routes/application.routes.js'
import jobRoute from './routes/job.routes.js'

dotenv.config({});
const app=express();
const PORT=process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
const corsOptions={
    origin:"http://localhost:5173",
    credentials:true,
}
app.use(cors(corsOptions))

// all api are here
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);  
app.use("/api/v1/job",jobRoute);  
app.use("/api/v1/application",applicationRoute);
app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`)
})
