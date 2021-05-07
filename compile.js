// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
}

// export abi and evm.bytecode
module.exports = JSON.parse(solc.compile(JSON.stringify(input)), 1).contracts['Inbox.sol']['Inbox'];
// module.exports = solc.compile(source, 1).contracts[':Inbox'];