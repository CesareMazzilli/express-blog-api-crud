const express = require("express");
const posts = require("./data")
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json({
        message: "Server del mio blog"
    })
})

app.get("/bacheca", (req, res) => {
    res.json({posts: posts,
        length: posts.length,}
    );
})

app.listen(port, () => {
    console.log("Server in ascolto"); 
});