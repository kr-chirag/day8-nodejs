const readline = require("readline");

const rl = new readline.createInterface(process.stdin, process.stdout);
let name;

rl.question("Enter name: ", (nameIn) => {
    if (isNaN(nameIn)) {
        name = nameIn;
        rl.close();
    } else {
        rl.setPrompt("Number is not valid name, try again: ");
        rl.prompt();
        rl.on("line", (nameIn) => {
            if (isNaN(nameIn)) {
                name = nameIn;
                rl.close();
            } else {
                rl.prompt();
            }
        });
    }
});

rl.on("close", () => {
    console.log("welcome", name);
    console.log(typeof name);
});
console.log("hello!");
