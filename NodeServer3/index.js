const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

const customMiddleware = (req,res,next) =>{
    req.customInfo = 20;
    console.log("You are from Custom Middleware");
    next()
}

//when we use app.use all the routes will use this customMiddleware
app.use(customMiddleware);


app.get('/me', (req, res) => {
    console.log(req.customInfo)
  res.send('Hello World!')
})

app.get('/demo',(req,res)=> {
  res.sendFile(__dirname + '/index.html');
})

//query parameters
app.get('/shop',(req,res)=> {
  console.log(req.query);
  res.send("Welcome to the Shop");
})

//string parameters
app.get('/user/:username',(req,res)=> {
  console.log(req.params);
  const p = req.params.username
  res.send(`Welcome to the ${p}`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})