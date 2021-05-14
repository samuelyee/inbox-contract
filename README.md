# Inbox project
For me to follow the first inbox project in the Udemy's "Ethereum and Solidity: The Complete Developer's Guide". However, the course is using an old Solidity version of 0.4.17 and current is now 0.8.x. I have commented the old code and mapped it over to the newer Solidity 0.8.x.

## Unit Test
Take note of the `test\Inbox.test.js`, which is important to test the smart contract before deploying. Test run it using `npm run test`

## Deployment
The contract is to be deployed to the Rinkeby network via Infura API. Some pre-requsite requirements:
1. Sign up for an account in `http://infura.io/` and create an Ethereum project.
1. Fill in the Rinkeby endpoint and your wallet mnemonic in `deploy.js`.
1. Deployment will require some gas in the wallet. Proceed to request for some test Ether.
1. Run `node deploy.js` to deploy.

## Deployed Contract
 The first contract is deployed to `0x29Be257A5524DD54589e46F467424b0699207832` using account address `0xCFdef1F369da350481CE135fd3AC494c6ABb6051`.

 ## Contract Interaction
 No frontend app has been written yet. Use 'Remix' to interact with the deployed contract by loading its address mentioned above.
