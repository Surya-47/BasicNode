const http = require('http')
const fs = require('fs')
const _= require('lodash')


const server = http.createServer((req,res)=>
{

    res.setHeader('Content-Type', 'text/html')

    // Lodash has the random function
    // Once method in lodash
    const greet = _.once(() =>
    {
        console.log(_.random(0,20))
        console.log('hello')
    }) 

    greet();


    //render html page
    let path= './views/'
    //Routing 
    switch(req.url)
    {
        case '/':
            path+='index.html'
            break;
        case '/about':
            path+='about.html'
            break;
        //Redirect about-me to about page
        case '/about-me':
            res.statusCode=303;
            res.setHeader('Location', '/about')
            res.end()

        default:
            path+='404.html'
            break;
    }



    fs.readFile(path,(err,data)=>
    {
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.end(data)
        }
    })

    // res.write('<h1> Hello World On every page </h1>') //Can return Tags as well
});



server.listen(3000, 'localhost',()=>
{
    console.log('listening for requests on port 3000')
});

//Check Dependencies in package.json file to know the packages used.