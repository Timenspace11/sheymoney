const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://singhvipul:Vipul@atlascluster.iqiprdi.mongodb.net/sheymoney", {useNewUrlParser : true, useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error',err => console.log(err))

connection.on('connected',()=>console.log('Mongo DB Connection Successfull'))
