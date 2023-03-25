const app = require('express')();
const express = require('express');
const port = process.env.PORT || 4001;
const mongoose = require('mongoose')
const bp = require('body-parser')
const db = require('./db/modal_')
require('dotenv').config()
mongoose.connect(process.env.DB).then(()=>{
  console.log('====================================');
  console.log('server connected');
  console.log('====================================');
})

app.use(bp.urlencoded({
  extended : false
}))

app.set('view engine','ejs')


app.get('/', (req, res) => {
  db.find().then((dta)=>{
    res.render("home",{
      dta : dta
    })
    console.log(dta)
  })
})

app.get('/update_:id',(req,res)=>{
  res.render("edit",{
    id : req.params.id
  })
})

app.post('/update',async(req,res)=>{
  await db.updateOne({ _id : req.body.id},{
    $set : {
      ammount : req.body.ammount,
      date : req.body.date
    }
  }).then(()=>{
    res.redirect('/')
  })
})

app.get('/delete_:id',(req,res)=>{
  db.deleteOne({_id : req.params.id}).then(()=>{
    res.redirect('/')
  })
})

app.get('/main', (req, res) => {
    res.render('main')
})
   

//const User = require('./db/user')




app.post('/s', (req, res) => {
  const user = new db({
    name : req.body.name,
    contact : req.body.number,
    address : req.body.address,
    ammount : req.body.ammount,
    date : req.body.date,
    class : req.body.class
  }).save().then((info)=>{
      res.redirect('/')
      console.log(info)
  })
  

})



app.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});