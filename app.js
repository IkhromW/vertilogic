const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routers')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(routes)


app.listen(PORT, () => {
  console.log('app running on PORT', 3000);
})

