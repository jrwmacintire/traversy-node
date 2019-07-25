const path = require('path');

// Basename
console.log(__filename);
console.log(`path.basename: ${path.basename(__filename)}`);

// Directory name
console.log(`path.dirname: ${path.dirname(__filename)}`);

// Extension name
console.log(`path.extname: ${path.extname(__filename)}`);

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))