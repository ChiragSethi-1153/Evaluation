require('dotenv').config()

try{
    if(process.env.PORT){
        console.log("PORT is " + process.env.PORT)
    }
    else{ 
        process.exit() 
    }
}
catch(err){  
    process.exit() 
}

const express = require('express')
const cors = require('cors')
const app = express()

require('./config/db')

app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", require('./routes'))

app.listen(process.env.PORT, () => {
    console.log(`server connected on ${process.env.PORT}`)
})