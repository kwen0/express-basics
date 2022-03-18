const express = require('express')
const app = express()
const path = require('path')
const members = require('./Members')
const logger = require('./middleware/logger')
const moment = require('moment')

// Init middleware
app.use(logger)

// Gets all members
app.get('/api/members', (req, res) => {
    res.json(members);
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
