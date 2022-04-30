import web3 from './web3';

const address = '0x065945a51A799C1BAB858B7B32bd941799438f27';

const abi = [{"constant":true,"inputs":[],"name":"details","outputs":[{"name":"","type":"string[]"},{"name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"},{"name":"password","type":"string"}],"name":"login","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"playeraccnts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"string"},{"name":"y","type":"string"}],"name":"enter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requests","outputs":[{"name":"name","type":"string"},{"name":"password","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];


export default new web3.eth.Contract(abi, address);
