var express = require('express')
var app = express()
var port = process.env.PORT || 8080

var navs = {}
var summers = {}
var falls = {}
var winters = {}

app.set('view engine', 'ejs')

app.use(express.static('assets'))

function createNav (nav) {
  var id = Object.keys(navs).length
  nav.createdAt = new Date()
  navs[id] = nav
}

function createSummer (summer) {
  var id = Object.keys(summers).length
  summer.createdAt = new Date()
  summers[id] = summer
}

function createFall (fall) {
  var id = Object.keys(falls).length
  fall.createdAt = new Date()
  falls[id] = fall
}

function createWinter (winter) {
  var id = Object.keys(winters).length
  winter.createdAt = new Date()
  winters[id] = winter
}


createNav({
  link: '/',
  title: 'Home'
})

createNav({
  link: '/summer',
  title: 'Summer Films'
})

createNav({
  link: '/fall',
  title: 'Fall Films'
})

createNav({
  link: '/winter',
  title: 'Winter Films'
})

createSummer({
  title: 'Guardians of the Galaxy Vol. 2',
  img: 'guardians.jpg',
  link: 'http://www.imdb.com/title/tt3896198/',
  release: '5 May 2017'
})

createSummer({
  title: 'Wonder Woman',
  img: 'wonderwoman.jpg',
  link: 'http://www.imdb.com/title/tt0451279/',
  release: '2 June 2017'
})

createFall({
  title: 'It',
  img: 'It.jpg',
  link: 'http://www.imdb.com/title/tt1396484/',
  release: '8 September 2017'
})

createFall({
  title: 'Blade Runner 2049',
  img: 'blade.jpg',
  link: 'http://www.imdb.com/title/tt1856101/',
  release: '6 October 2017'
})

createWinter({
  title: 'Star Wars: The Last Jedi',
  img: 'starwars.jpg',
  link: 'http://www.imdb.com/title/tt2527336/',
  release: '15 December 2017'
})

createWinter({
  title: 'Jumanji: Welcome to the Jungle',
  img: 'jumanji.jpg',
  link: 'http://www.imdb.com/title/tt2283362/',
  release: '20 December 2017'
})

app.get('/', function (request, response) {
  response.render('pages/index', {
    navs: navs
  })
})

app.get('/summer', function (request, response) {
  response.render('pages/summer', {
    navs: navs,
    summers: summers
  })
})

app.get('/fall', function (request, response) {
  response.render('pages/fall', {
    navs: navs,
    falls: falls
  })
})

app.get('/winter', function (request, response) {
  response.render('pages/winter', {
    navs: navs,
    winters: winters
  })
})

app.listen(port)
