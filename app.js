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

app.get('/:tags', (req, res, next) => {
    const day = req.params.tags
   
    if(!data.day.includes(day)){
        res.status(404).send('No One Played This Day')
     }
     else{
         const matching = data.headliners.filter(headliners => headliners.day.includes(day))
         res.status(200).send(matching)
        }
})

app.use((req,res, next) => {
    res.status(500).send('Something Went Terribly Wrong, Sorry.')
})

app.post('/newArtist', (req, res) => res.send('New artist has been added'))


app.listen(port, () => console.log(`Ayyyy hmu on ${port}`))