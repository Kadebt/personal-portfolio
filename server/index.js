const express = require('express')
const massive = require('massive')
require('dotenv').config()
const session = require('express-session')
const controller = require('controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const path = require('path')
const { appendFile } = require('fs')

const app = express()

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cooke: {maxAge: 1000 * 60 * 60 * 24 * 30},
        secret: SESSION_SECRET
    })
)

app.get('app/projects', controller.getProjects)
app.get('app/presentation/:id', controller.getPresentation)

app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
    app.listen(SERVER_PORT, () =>
      console.log(`Listening on ${SERVER_PORT}`)
    )
  })