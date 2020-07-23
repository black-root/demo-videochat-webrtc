const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = process.env.PORT || 8080
app.use(express.static(__dirname + "/"))
http.listen(port, () => console.log(`Active on ${port} port`))



