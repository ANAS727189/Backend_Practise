const express = require("express");
const { sweets, colors } = require("./data-1.js");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send(
        `<html>
            <head>
                <title>JSON Data</title>
            </head>
            <body>
            <h1>Hello ! I am Anas .</h1>
                <button onClick="window.location.href='/sweets'">Visit Sweets</button>
                <button onClick="window.location.href='/colors'">Visit Colors</button>
            </body>
        </html>`
    );
});

app.get("/sweets/", (req, res) => {
    const newSweets = sweets.map((sweet) => {
        const { id, type, name } = sweet;
        return { id, type, name };
    });
    res.json(newSweets);
});


app.get("/sweets/query/", (req, res) => {
    const { search, limit } = req.query;
    if(limit) console.log(limit)
    if(search) console.log(search)
    let newSweets = [...sweets];
    if (search) {
        newSweets = newSweets.filter((sweet) => {
            return sweet.name.toLowerCase().startsWith(search.toLowerCase());
        });
    }
    if (limit) {
        newSweets = newSweets.slice(0, Number(limit));
    }
    return res.status(200).json(newSweets);
});



app.get("/sweets/:sweetID", (req, res) => {
    const newId = req.params.sweetID;
    const singleSweet = sweets.find((sweet) => sweet.id === newId);
    if (!singleSweet) {
        return res.status(404).send("Sweet not found");
    }
    res.json(singleSweet);
});

app.get("/sweets/:sweetID/batters/batter/:batterID", (req, res) => {
    const sweetId = req.params.sweetID;
    const batterId = req.params.batterID;
    const singleSweet = sweets.find((sweet) => sweet.id === sweetId);
    if (!singleSweet) {
        return res.status(404).send("Sweet not found");
    }
    const batter = singleSweet.batters.batter.find((batter) => batter.id === batterId);
    if (!batter) {
        return res.status(404).send("Batter not found");
    }
    res.json(batter);
});

app.get("/sweets/:sweetID/topping/:toppingID", (req, res) => {
    const sweetId = req.params.sweetID;
    const toppingId = req.params.toppingID;
    const singleSweet = sweets.find((sweet) => sweet.id === sweetId);
    if (!singleSweet) {
        return res.status(404).send("Sweet not found");
    }
    const newTopping = singleSweet.topping.find((singleTopping) => singleTopping.id === toppingId);
    if (!newTopping) {
        return res.status(404).send("Topping not found");
    }
    res.json(newTopping);
});



app.get("/colors", (req, res) => {
    res.json(colors);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});