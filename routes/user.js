const express = require("express");

const userRouter = express.Router();

userRouter.use((req, res, next) => {
    if (req.url === "/a") {
        res.send("Middleware retuned");
    } else next();
});

userRouter.get("/", (req, res) => {
    res.send("<h1>User GET /</h1>");
});

userRouter.get("/a", (req, res) => {
    res.send("<h1>User GET /a</h1>");
});

userRouter.get("/b", (req, res) => {
    res.send("<h1>User GET /b</h1>");
});

module.exports = userRouter;
