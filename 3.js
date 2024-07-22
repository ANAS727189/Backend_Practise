const {readFile, writeFile} = require('fs');

readFile('./content/1.txt', 'utf8', (err, res) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = res;
    readFile('./content/2.txt', 'utf8', (err, res) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = res;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, res) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(res);
        });
    });
});