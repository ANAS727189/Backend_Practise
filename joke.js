const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const baseURL = "https://v2.jokeapi.dev/joke";
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
const params = "blacklistFlags=nsfw,religious,racist&idRange=0-100";

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/joke.html');
});

app.get("/joke", async (req, res) => {
    try {
        const response = await axios.get(`${baseURL}/${categories.join(',')}?${params}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch jokes" });
    }
});

app.get("/joke/:category", async (req, res) => {
    const category = req.params.category;
    if (!categories.includes(category)) {
        return res.status(400).json({ error: "Invalid category" });
    }

    try {
        const response = await axios.get(`${baseURL}/${category}?${params}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch jokes" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
