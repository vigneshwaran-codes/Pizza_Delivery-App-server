const express = require('express')
const Pizza = require('./models/pizzaModel.js')
const db = require('./db.js')
const app = express()
app.use(express.json())
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}))

const pizzasRoute = require('./routes/pizzasRoute.js')
const userRoute = require('./routes/userRoute.js')
const ordersRoute = require('./routes/ordersRoute.js')

// Middleware
app.use('/api/pizzas', pizzasRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', ordersRoute)

app.get('/', (req, res) => {
  res.send('Welcome Pizza Delivery App')
})

app.listen(PORT, () => console.log('Server running on port port 🔥', PORT))
