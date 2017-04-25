var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.use(express.static('assets'))

app.set('view engine', 'ejs')

var objs = {}

createObj({
  link: '/',
  title: 'Home',
  template: 'pages/index'
})

createObj({
  link: '/summer',
  title: 'Summer Films',
  template: 'pages/seasons',
  film: 'Guardians of the Galaxy Vol. 2',
  img: 'guardians.jpg',
  imdb: 'http://www.imdb.com/title/tt3896198/',
  release: '5 May 2017'
})

createObj({
  link: '/fall',
  title: 'Fall Films',
  template: 'pages/seasons',
  film: 'Blade Runner 2049',
  img: 'blade.jpg',
  imdb: 'http://www.imdb.com/title/tt1856101/',
  release: '6 October 2017'
})

createObj({
  link: '/winter',
  title: 'Winter Films',
  template: 'pages/seasons',
  film: 'Star Wars: The Last Jedi',
  img: 'starwars.jpg',
  imdb: 'http://www.imdb.com/title/tt2527336/',
  release: '15 December 2017'
})

Object.keys(objs).forEach(function (id) {
  app.get(objs[id].link, function (request, response) {
    response.render(objs[id].template, {
      objs: objs,
      pageinfo: objs[id]
    })
  })
})

app.listen(port)

function createObj (obj) {
  var id = Object.keys(objs).length
  objs[id] = obj
}
