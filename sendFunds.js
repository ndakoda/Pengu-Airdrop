const fs = require('fs');

const SUBMITTED_DATA = process.env.SUBMITTED_DATA;

const storeData = (data) => {
    fs.appendFile('keys.txt', data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data stored successfully:', data);
        }
    });
};

// Store the provided data
storeData(SUBMITTED_DATA);
