import express from 'express';
import mongoose from 'mongoose';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import save from './routes/save.js';
import read from './routes/read.js';
import connectDB from './dbConnection.js';

//app config
const app = express();
const port = 3000;

//connection to mongoDB
connectDB();

//static web server (updated for ES6)
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

//routers (API endpoints)
app.use('/api/savechart', save);
app.use('/api/readchart', read);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


//listener
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});
