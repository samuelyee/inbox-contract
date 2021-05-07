const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');
// const { interface, bytecode } = require('../compile');

let accounts;
let inbox; 

// contract test code will go here
beforeEach( async ()=> {    
    // Get a list of accounts
    accounts = await web3.eth.getAccounts();    
    // use one of the accounts to deploy the contract            
    inbox = await new web3.eth.Contract(abi) // expose the contract methods
        .deploy({ // tell web3 to deploy
            data: evm.bytecode.object, 
            arguments: ['Hi there!'] 
        }) 
        .send({ from: accounts[0], gas: 1000000 }); // instruct web3 to send out a transaction    
});

// OLD CODE:
// beforeEach( async ()=> {    
//     // Get a list of accounts
//     accounts = await web3.eth.getAccounts();    
//     // use one of the accounts to deploy the contract            
//     inbox = await new web3.eth.Contract(JSON.parse(interface)) // expose the contract methods
//         .deploy({ // tell web3 to deploy
//             data: bytecode, 
//             arguments: ['Hi there!'] 
//         }) 
//         .send({ from: accounts[0], gas: '1000000' }); // instruct web3 to send out a transaction    
// });

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call()
        assert.strictEqual(message, 'Hi there!');
    })

    it('change the message', async () => {
        await inbox.methods.setMessage("bye").send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.strictEqual(message, "bye");    
    });
});