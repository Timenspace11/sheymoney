const express = require('express');
const dbConnect = require( './dbConnect')
const app = express();
app.use(express.json())
const userRoute = require('./routes/usersRoute')
const port = 5000
app.use('/api/users/', userRoute)



//app.get('/',(req,res) => res.send('Hello World!'))
app.listen(port, () =>console.log(`Node js server is started at port  ${port}!`))
