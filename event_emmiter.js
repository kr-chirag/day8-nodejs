const EventEmmiter = require("events");

const eventEmmiter = new EventEmmiter();

eventEmmiter.on("myEvent", (name) => {
    console.log("myEvent occured...", name, "emited it");
});

eventEmmiter.emit("myEvent", "Chirag");

class MyEmiiter extends EventEmmiter {
    constructor(name) {
        super();
        this._name = name;
        this.on("name", this.showName);
    }
    showName() {
        console.log(this._name);
    }
}

const me = new MyEmiiter("Chirag");
me.emit("name");
