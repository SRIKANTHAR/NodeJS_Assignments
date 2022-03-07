const { name } = require("tar/lib/types");

function getNameFromCommandLine() {
  // Write you code here, name should be taken as args in process.argv
  var name = process.argv[process.argv.length-1];
  return name;
}


function getNameFromEnv() {
  // Write your code here
  return process.env.name;
}


function getNameFromReadLine(name) {
  // Write your code here
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}


module.exports = {
  getNameFromCommandLine,
  getNameFromEnv,
  getNameFromReadLine,
};
