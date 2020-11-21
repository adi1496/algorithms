// https://dog.ceo/api/breeds/list/all
const https = require('https');
// for http websites we use const http = require('http');

async function getDogs() {

    const response = await new Promise((resolve, reject) => {
        https.get('https://dog.ceo/api/breeds/list/all', (res) => {
            let data='';
            res.on('data', async (chunck) => {
                data += chunck;
            });

            res.on('end', () => {
                data = JSON.parse(data);
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });


    return response;
}

const call = new Promise((resolve, reject) => {
    resolve(getDogs());
}).then((data) => {
    console.log(data);
});

// console.log(call);