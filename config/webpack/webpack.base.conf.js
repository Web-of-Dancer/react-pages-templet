const entry = require("./webpack.entry.conf");
const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}
console.log("-----------------------------------------",newEntry);
let config = {
    entry: newEntry,
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".pcss"],
    }
};
module.exports = config;
// let config = {
//     entry: {
//         "index": "./entry/index.js",
//         "shop": "./entry/shop.js"
//     },
//     resolve: {
//         extensions: [".js",".json",".jsx",".css",".pcss"],
//     }
// };
// module.exports = config;