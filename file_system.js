const { log } = require("console");
const fs = require("fs");
const zlib = require("zlib");

function logError(err) {
    if (err) {
        console.log(JSON.stringify(err));
        return true;
    }
    return false;
}

// creating a file
fs.writeFile("tmp/demo.txt", "demo text to write", (err) => {
    if (!logError(err)) {
        fs.readFile("tmp/demo.txt", "utf8", (err, file) => {
            if (!logError(err)) console.log(file);
        });
        fs.appendFile("tmp/demo.txt", " appended data", logError);
        fs.rename("tmp/demo.txt", "tmp/newDemo.txt", logError);
        fs.unlink("tmp/newDemo.txt", logError);
    }
});

fs.mkdir("tmp/src", (err) => {
    if (!logError(err)) {
        fs.rmdir("tmp/src", logError);
    }
});

fs.readdir("./", (err, files) => {
    if (!logError(err)) console.log(files);
});

const readStream = fs.createReadStream("tmp/demors.html", "utf8");
const writeStream = fs.createWriteStream("tmp/demows.txt");
const writeStreamPipe = fs.createWriteStream("tmp/pipe.txt");
const writeStreamGz = fs.createWriteStream("tmp/pipe.txt.gz");
const writeStreamGzUn = fs.createWriteStream("tmp/pipeGunzip.txt");
readStream.on("data", (chunk) => {
    writeStream.write(chunk);
});

readStream.pipe(writeStreamPipe);
readStream.pipe(zlib.createGzip()).pipe(writeStreamGz);
