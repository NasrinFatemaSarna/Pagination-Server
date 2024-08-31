const express = require('express')
const router = require('./src/routes/api')
const bodyParser = require('body-parser')
const  mongoose  = require('mongoose')
const cors = require('cors')



const app = express()
app.use(bodyParser.json())
app.use(cors())


// database connenction start

// const uri = `mongodb+srv://${userName}:${password}@cluster0.0uasavi.mongodb.net/${databaseName}?retryWrites=true&w=majority`


const uri =`mongodb+srv://mernpractice:<password>@cluster0.0uasavi.mongodb.net/searchpagination?retryWrites=true&w=majority`

const options = {user:"mernpractice", pass:"mernpractice"}


mongoose.connect(uri, options)
.then(()=> console.log('db connected'))
.catch((error)=> console.log(error))


// database connenction end



app.use('/api/v1/', router)
app.use("*", (req, res) => {
    res.status(404).send("Not Found")
  });

  module.exports = app


    






