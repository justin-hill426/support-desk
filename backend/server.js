const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const errorHandler = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')

//connect to database
connectDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.status(200).send('Hello')
})

//can use this to make a server
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))