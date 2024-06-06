const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})