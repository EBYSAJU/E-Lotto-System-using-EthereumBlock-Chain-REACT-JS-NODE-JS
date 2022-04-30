
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const signupPath = path.resolve(__dirname, 'contracts', 'signup.sol');

const source1 = fs.readFileSync(signupPath , 'utf8');
module.exports = solc.compile(source1, 1).contracts[':signupdetail'];
console.log(solc.compile(source1,1));
