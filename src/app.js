const express = require('express')

const path = require('path')
const hbs = require('hbs')
const news  = require('./tools/news')

const app = express()
const port = 3000

const fs = require('fs')

//static file paths
// const path = require('path')
// const publicDirectory = path.join(__dirname,'../public')
// //forgot this ...
// app.use(express.static(publicDirectory ))


//dynamic file paths

// //views
const public = path.join(__dirname,'../public')

app.use(express.static(public))

app.set('view engine','hbs')
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views',viewsPath)
//partials
const partialsPath = path.join(__dirname, '../templates/partials')
app.set('partials', partialsPath)

////endpoint



app.get('/news', (req, res) => {

  news((error,data)=>{
    if(error){
      return res.send({error})
    }
    res.render('news',{
      value:data.news
    })
  })
})

// 404page
// app.get('*',(req,res)=>{
//   res.render('404page',{
//       title:'404 Page'
//   })

// })


//listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

