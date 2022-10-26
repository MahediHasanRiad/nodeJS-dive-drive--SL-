
const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/about', (req, res) => {

    res.render('pages/about.ejs')
})

app.get('/help', (req, res) => {
    res.render('pages/help.ejs')
})

app.get('/', (req, res) => {
    
    res.render('pages/index.ejs', {title: 'this is out 1st templater engine'})
})

app.listen(2020, () => {
    console.log('server is on.....')
})























// const express = require('express')
// const app = express()

// app.set('view engine', 'ejs')

// app.use(express.urlencoded({extended: true}))
// app.use(express.json())


// app.get('/:id', (req, res) => {
//     let student = {
//         name: 'riad',
//         roll: 145145,
//         class: '10',
//         visible: false
//     }
//     let books = [
//         {name: 'self learning', author: 'M.H.Riad'},
//         {name: 'self Decipline', author: 'M.H.Shamim'},
//         {name: 'self Motivation', author: 'M.H.Tamim'}
//     ]

//     res.render('index', {title: 'this page number is: ' + req.params.id, student, books})
// })

// // app.get('/', (req, res) => {
    
// //     res.render('index', {title: 'this is 1st dinamic title'})
// // })
// app.listen(8080, () => {
//     console.log('server is on...')
// })