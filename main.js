const path = require("path");
const fs = require("fs")
const args = process.argv.slice(2)
const ini = require("./parseIni")
const env = require("./parseEnv")


if (args.length !== 1){
    console.log("usage: node main.js or node main <CONFIG_FILENAME>")
    process.exit(0)
}
filename = args[0]
if (!fs.existsSync(filename)){
    console.log(`${filename} n'existe pas`);
    process.exit(-1);
}
const content = fs.readFileSync(filename, "utf-8")

if (filename == 'data/.env'){
fs.writeFile('env.json', env(content), function (err) {
    if (err) throw err;
    console.log(env(content))
    console.log('env.json crée');
});}

if (filename == 'data/php.ini') {
fs.writeFile('ini.json', ini(content), function (err) {
    if (err) throw err;
    console.log('ini.json crée')
});}