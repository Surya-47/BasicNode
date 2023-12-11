// Read through the stream file

const fs = require('fs')



const readStream = fs.createReadStream('./read/stream.txt', {encoding:'utf-8'}) //by using encoding we dont have to use tostring() on chunk

const writeStream = fs.createWriteStream('./read/bog.txt')


//.on is an event listner


// readStream.on('data', (chunk) =>
// {
//     console.log('-----------------New Chunk-------------------')
//     console.log(chunk)
//     writeStream.write('\n\n\n New Chunk \n\n \n')
//     writeStream.write(chunk)
// })


// Piping does the same thing above... and there is also a duplex stream
readStream.pipe(writeStream)

