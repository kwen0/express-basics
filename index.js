const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
