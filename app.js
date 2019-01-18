const express = require('express')
const app = express()
const port = 3005
const data = require('./data.json')
const cors = require('cors')

app.use(cors())

app.use(express.static('public'))

app.get('/data', (req, res, next) => {
    res.status(200).send({
        "message": "Sucess!",
        "data": data
    })
})


app.listen(port, () => console.log(`Ayyyy hmu on ${port}`))