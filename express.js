const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false })); // for handling form data
app.use(bodyParser.json()); // for handling json data

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/submit", (req, res) => {
    res.write("<h1>Form submiterd</h1>");
    res.write(JSON.stringify(req.body));
    res.end();
});

app.get("/query", (req, res) => {
    res.send(JSON.stringify(req.query));
});

app.get("/params/:name/:age", (req, res) => {
    res.send(JSON.stringify(req.params));
});

app.get("*", (req, res) => {
    res.send("404: Page not found :(");
});

app.listen(3000, (error) => {
    if (!error) console.log("server Started: http://localhost:3000");
    else console.log(error);
});
