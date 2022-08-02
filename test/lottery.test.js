const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let lotteryticket;
beforeEach(async() => {
  // Get a list of all accounts
     accounts = await web3.eth.getAccounts();
   // Use one of those accounts to deploy
   // the contract
lotteryticket=  await new web3.eth.Contract(JSON.parse(interface))
     .deploy({
       data: bytecode
     })
    .send({ from: accounts[0], gas: '1000000' });
 });


describe('lotteryticket', () => {
  it('deploys a contract', () => {
  assert.ok(lotteryticket.options.address);
});
it('has a default message', async () => {
  const manager = await lotteryticket.methods.constructor();

});
});
