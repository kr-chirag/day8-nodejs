const express = require("express");
const url = require("url");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
    const query = url.parse(req.url, true).query;
    if (query?.name)
        res.cookie("name", query.name, { httpOnly: true, secure: true });
    res.send(`<h1>Cookies Example Cookie name: ${req.cookies.name}</h1>`);
});

app.listen(3000, (error) => {
    if (!error) console.log("server Started: http://localhost:3000");
    else console.log(error);
});
