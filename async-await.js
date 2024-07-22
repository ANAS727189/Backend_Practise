const {readFile, writeFile} = require('fs').promises;

const start = async() => {
   try {
    const first = await readFile('./content/1.txt', 'utf8')
    const second = await readFile('./content/2.txt', 'utf8')
    await writeFile(
        './content/result-async-await.txt',
         `This is the result: ${first} ${second}`,
          {flag: 'a'}
        );
    
   } catch (error) {
      console.log(error);
   }
}

start();