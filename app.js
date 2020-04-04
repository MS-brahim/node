const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.static(__dirname + '\\views'));
app.use('/', router);
app.use(express.json());

app.get('/api/departement',(req,res)=>{
    res.sendFile(path.join(__dirname + '\\departement.json'));
});


app.listen(1994);