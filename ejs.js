const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.get("/:name", (req, res) => {
    res.render("index", {
        data: { name: req.params.name, items: ["ab", "bc", "cd"] },
    });
});

app.get("*", (req, res) => {
    res.send("404: Page not found :(");
});

app.listen(3000, (error) => {
    if (!error) console.log("server Started: http://localhost:3000");
    else console.log(error);
});
