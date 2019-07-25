const path = require("path");
const fs = require("fs");

// Create folder                       vvv empty object -> no options
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     else console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello Node!", err => {
//   if (err) { throw err; }
//   else {
//       console.log("File written...");
//       fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " Later Node!", err => {
//         if (err) throw err;
//         else console.log("File appended...");
//       });
//   }
// });

// Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//     if (err) throw err;
//     else console.log(data);
//   });

// Rename file
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloagain.txt"), (err, data) => {
    if (err) throw err;
    else console.log('File renamed...');
  });