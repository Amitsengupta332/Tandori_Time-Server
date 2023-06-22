const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000;

const chefList = require('./data/chefList.json')


app.use(cors());



app.get('/',(req, res)=>{
    // res.json({ })
    res.send('chef recipe is running')
})

app.get('/chefList', (req, res) => {
    res.send(chefList)
})

app.listen(port, () => {
    console.log(`chef recipe is running on Port:${port}`)
})