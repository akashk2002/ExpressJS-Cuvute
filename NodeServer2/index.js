const express = require('express')
let ejs = require('ejs');

const app = express()

app.set('view engine', 'ejs')

app.get('/resume/rohith',(req ,res)=>{
    res.render('resume',{
        firstName: 'Rohith',
        lastName : 'Gupta',
        title: 'Software Engineer Intern',
        isGraduated: false,
        hobbies : ['Swiming', 'Reading', 'Coding']
    })
})

app.get('/resume/akash',(req ,res)=>{
    res.render('resume',{
        firstName: 'Akash',
        lastName : 'Kanyadhara',
        title: 'DevOps Engineer Intern',
        isGraduated: true,
        hobbies : ['Running']

    })
})

// app.get('/', (req,res)=>{
//     res.send('EJS and Request Parameters')
// })

// app.get('/user/akash',(req,res)=>{
//     res.sendFile(__dirname + '/pages/user1.html')
// })
// app.get('/user/kanyadhara',(req,res)=>{
//     res.sendFile(__dirname + '/pages/user2.html')
// })

app.listen(3000, ()=>{
    console.log('Sever is Up')
})