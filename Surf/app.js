const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.static(__dirname + '\\views'));
app.use('/', router);
app.use(express.json());

// let currentDepatment = {};

// app.get('/', (req, res) => {
//     currentDepatment = {};
// });

app.get('/api/produits', (req, res) => {
    res.sendFile(path.join(__dirname + '\\produits.json'));
});



//get departements of an id entreprise
app.get('/api/produits/:id', (req, res) => {
    fs.readFile("produits.json", (err, data) => {
        if (err) {
            return console.error(err);
        } else {
            const prd = JSON.parse(data);
            const prd = prd.find(e => e.id === +req.params.id);
            if (!prd) return res.status(404).send("there is no such entreprise");
            else {
                res.send(prd);
            }
        }
    });
});



//get the departement information
app.get('/produit.html', (req, res) => {

    fs.readFile("produits.json", (err, data) => {
        if (err) {
            return console.error(err);
        } else {
            const prd = JSON.parse(data);
            for (let e = 0; e < prd.length; e++) {
                for (let d = 0; d < prd[e].produits.length; d++) {
                    if(prd[e].id === +req.query.homeId && prd[e].produits[d].id === +req.query.prdId){
                        currentPr = prd[e].produits[d];
                        res.redirect('/produit.html');
                        return;
                    }
                }
            }
            res.status(404).send("there is no such department")
        }
    });
});


app.get('/api/produit/', (req, res) => {
    res.send(currentPr);
});






const port = process.env.PORT || 2021;
app.listen(port, () => console.log(`listening on port ${port}`));