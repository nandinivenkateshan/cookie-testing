const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3000

app.use(cookieParser())

function loginPage (req, res) {
  // load login page - login.html

  // console.log(req.header('cookiE'))
  // res.set('Set-Cookie', 'mehulkumar=parmar')
  // res.set('Set-Cookie', 'nandini=venkateshan')
  res.cookie('nandini', 'venkateshan')
  res.sendFile(path.join(__dirname, '/template/login.html'))
}

function signupPage (req, res) {
  // load signup page - signup.html
  res.sendFile(path.join(__dirname, '/template/signup.html'))
}

function logoutPage (req, res) {
  res.clearCookie('nandini')
  res.sendFile(path.join(__dirname, '/template/logout.html'))
}

function welcomePage (req, res) {
  // load welcome page - welcome.html

  if (req.cookies.nandini === undefined) {
    res.send('nandini is not present, sorry...')
    return
  }

  res.sendFile(path.join(__dirname, '/template/welcome.html'))
}

app.get('/login', loginPage)

app.get('/signup', signupPage)

app.get('/logout', logoutPage)

app.get('/', welcomePage)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
