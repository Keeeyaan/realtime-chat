import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();
const app = express();

//regular middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors middleware
app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
  })
);

//router middleware
app.get('/api/user', (req, res) => res.send('<h1>FK U</h1>'));

export default app;
