const express = require('express')
const bodyParser = require('body-parser')
const itemsDB = require('./db/items')

const port = process.env.PORT || 3000
const app = express()

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/items', (req, res, next) => {
  itemsDB.get().then(items => res.json(items))
})

app.post('/api/items', (req, res, next) => {
  // do some validation
  itemsDB.add(req.body).then(() => res.sendStatus(201))
})

app.listen(port, () => console.log(`Server running on port ${port}`))
