const path = require("path");

// Basename
console.log(path.basename(__filename)); // Output: path.js
// Dirname
console.log(path.dirname(__filename)); // Output: /path/to/modules
// Extname
console.log(path.extname(__filename)); // Output: .js

//create a path
console.log(path.parse(__filename));

//join paths
console.log(path.join(__dirname, 'modules', 'path.js')); // Output: /path/to/modules/path.js
