const express = require('express')
const app = express()
const port = process.env.PORT || 3005
const data = require('./data.json')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

app.use(cors())

app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    knex('woodstock-data')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/', (req, res, next) => {
    res.status(200).send({
        "message": "Sucess!",
        "data": data
    })
})

app.get('/:day', (req, res, next) => {
    const day = req.params.day
   
    if(!data.day.includes(day)){
        res.status(404).send('No One Played This Day')
     }
     else{
         const matching = data.headliners.filter(headliners => headliners.day.includes(day))
         res.status(200).send(matching)
        }
})

app.post('/', (req, res) => res.send('New Artist Has Been Added'))


app.use((req,res, next) => {
    res.status(500).send('Something Went Terribly Wrong, Sorry.')
})


app.listen(port, () => console.log(`Ayyyy hmu on ${port}`))