# MY KYC
A KYC registry prototype based on blockchain technology.

# Project description
Know your customer (KYC) checks are currently an extremely time consuming and costly affair for which millions of dollars every year to keep up with KYC regulations or risk being fined heavily by the banls. Through MY KYC it shall get simplified to a large extent.

MY KYC eliminates the redundant KYC checks that banks currently perform by maintaining a common secure database in a block-chain. The nature of a block-chain ensures that unauthorized changes to the data are automatically invalidated. The proof-of-reputation concept makes the verification process more robust.

This regsitry prototype was build over a local test-net. So, there are a few limitations regarding scalability such as the maximum number of banks. This can be deployed over Ethereum Network to increase its scalability.

# Requirements
The system must have `NodeJS` and `ethereumjs-testrpc` installed, npm version is `>= 5.6.0` and node version is `>= 9.4.0`. Check the version numbers by using the terminal commands `node -v` and `npm -v`. Install `testrpc` using the command line `npm install -g ethereumjs-testrpc` in linux.

Links - 
https://github.com/ethereumjs/testrpc  
https://www.npmjs.com/package/ethereumjs-testrpc/tutorial

# Instructions to run
1. Open a terminal window and execute the command line `testrpc`.
2. Open another terminal and go to the directory that you have download this in.
3. Execute the `init.js` file using the command line `node init.js`.
4. After about 10-15 seconds, we obtain a 20 byte address. This is the address of the compiled smart contract.
5. Go to the file `root\js\contractDetails.js` and open it using a text editor.
6. Edit the first line denoting the contract instance address given by the variable `contractAddress` to the 20 byte address obtained in step `4`.
7. Now the application is ready for use. Make sure the terminal with `testrpc` is up and running. It acts as the local ethereum test network.
8. You can also use other test nets to deploy this smart contract like Ganache-Cli, etc.
