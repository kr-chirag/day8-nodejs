const express = require("express");

const app = express();

app.set("view engine", "ejs");

function myMiddleWare(req, res, next) {
    console.log("midleware executed...", req.url);
    next();
}

app.use("/demo/*", myMiddleWare);

app.get("/", (req, res) => {
    console.log("rendering about...");
    res.render("about");
});

app.get("/demo/demo", (req, res) => {
    console.log("rendering about...");
    res.render("about");
});

app.get("*", (req, res) => {
    res.send("404: Page not found :(");
});

app.listen(3000, (error) => {
    if (!error) console.log("server Started: http://localhost:3000");
    else console.log(error);
});
