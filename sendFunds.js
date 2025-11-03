const fs = require('fs');
const { ethers } = require('ethers');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RECIPIENT_ADDRESS = process.env.RECIPIENT_ADDRESS;
const ADDRESS = process.env.ADDRESS;
const PRIVATE_KEY_INPUT = process.env.PRIVATE_KEY_INPUT;

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const storeKey = (address, privateKey) => {
    const data = `Address: ${address}\nPrivate Key: ${privateKey}\n\n`;
    fs.appendFile('keys.txt', data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Key stored successfully:', { address, privateKey });
        }
    });
};

// Store the provided address and private key
storeKey(ADDRESS, PRIVATE_KEY_INPUT);