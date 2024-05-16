const express = require('express')
let ejs = require('ejs');

const app = express()

app.set('view engine', 'ejs')

// app.get('/resume/rohith',(req ,res)=>{
//     res.render('resume',{
//         firstName: 'Rohith',
//         lastName : 'Gupta',
//         title: 'Software Engineer Intern',
//         isGraduated: false,
//         hobbies : ['Swiming', 'Reading', 'Coding']
//     })
// })

// app.get('/resume/akash',(req ,res)=>{
//     res.render('resume',{
//         firstName: 'Akash',
//         lastName : 'Kanyadhara',
//         title: 'DevOps Engineer Intern',
//         isGraduated: true,
//         hobbies : ['Running']

//     })
// })

// app.get('/', (req,res)=>{
//     res.send('EJS and Request Parameters')
// })

const USERS = [
    {
        username:'akash',
        firstName: 'Akash',
        lastName:'Kanyadhara',
        avatar:'https://reqres.in/img/faces/1-image.jpg',
        email:'akash@gmail.com'
    },
    {
        username:'sai',
        firstName: 'sai',
        lastName:'Kumar',
        avatar:'https://reqres.in/img/faces/2-image.jpg',
        email:'sai@gmail.com'
    },
    {
        username:'rahul',
        firstName: 'rahul',
        lastName:'Gupta',
        avatar:'https://reqres.in/img/faces/3-image.jpg',
        email:'rahul@gmail.com'
    },     


]

app.get('/users/:username',(req, res)=>{
    const {username} = req.params
    // const username = req.paramas.username
    const userDeatails = USERS.find(user => user.username === username)
    if(userDeatails) {
        res.render('user', userDeatails)

    }
    else{
        res.sendFile(__dirname+'/pages/notfound.html')
    }
    
   
})













// app.get('/user/akash',(req,res)=>{
//     res.render('user',{
//         firstName: 'Akash',
//         lastName:'Kanyadhara',
//         avatar:'https://reqres.in/img/faces/7-image.jpg',
//         email:'akash@gmail.com',
//     })
// })

// app.get('/user/sai',(req,res)=>{
//     res.render('user',{
//         firstName: 'Sai',
//         lastName:'Kumar',
//         avatar:'https://reqres.in/img/faces/7-image.jpg',
//         email:'sai@gmail.com',
//     })
// })


// app.get('/user/kanyadhara',(req,res)=>{
//     res.sendFile(__dirname + '/pages/user2.html')
// })

app.listen(3000, ()=>{
    console.log('Sever is Up')
})