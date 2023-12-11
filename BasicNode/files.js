const fs = require('fs') //fs module built in node 

//read Files

fs.readFile('./read/file.txt',(err,data)=>
{
    if(err){
        console.log(err);
    }
    console.log(' 1] since buffer has to be converted to string which takes time, the compiler reads the next lines while that happens')
    console.log(data.toString()); //toString changes the data buffer to string and displays the string in the file
}
);

console.log('2] Next line') //here the js reads the file and while its getting read it moves on to execute the next line as hence last line gets printed first and then the data in the file




// write in a file

fs.writeFile('./read/write.txt', 'Hello world check', () => {//writeFile replaces whatever is already there in the file with the given string
    console.log('3] file was written')
})

fs.writeFile('./read/write2.txt', 'This file is automatically created since there was no such file in the directory in the specified path', () => {
    console.log('4] New file was created')
})




// Directory

if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err) =>
{
    if(err){
    console.log(err)
    }
    console.log('5] folder Created')
})
}
else{
fs.rmdir('./assets',(err) =>{
    if(err)
    {
        console.log(err)
    }
    console.log('6] Folder deleted')
})
}



// Delete Files

if(fs.existsSync('./read/write.txt')){
    fs.unlink('./read/write.txt', (err) =>{     //unlink is used to delete files.
        if(err){
            console.log(err)
        }
        console.log('7] File Deleted' )
    })
}