const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
    
const port = 5004;
mongoose.connect(process.env.url)
    .then(() => { console.log(`MongoDB is connected`) })
    .catch((error) => { console.log(error) })


app.listen(port, () => { console.log(`this server in running on the port ${port}`); })