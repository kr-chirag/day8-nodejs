const express = require("express");
const userRouter = require("./routes/user");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("rendering about...");
    res.render("about");
});

app.use("/user", userRouter);

app.get("*", (req, res) => {
    res.send("404: Page not found :(");
});

app.listen(3000, (error) => {
    if (!error) console.log("server Started: http://localhost:3000");
    else console.log(error);
});
