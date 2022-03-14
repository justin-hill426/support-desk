const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.status(200).send('Hello')
})

//can use this to make a server
app.use('/api/users', require('./routes/userRoutes'))


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))