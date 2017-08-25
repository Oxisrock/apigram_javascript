// ruta signin
var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
// ruta /signin
page('/', function(ctx, next) {
  title('Apigram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username:'oxisrock',
        avatar: 'img/internt_web_technology-13-256.png',
      },
      url: 'img/world-of-warcraft-alliance-characters-wallpaper-3.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date()
    },
    {
      user: {
        username:'Zelena',
        avatar: 'img/internt_web_technology-13-256.png',
      },
      url: 'img/world-of-warcraft-alliance-characters-wallpaper-3.jpg',
      likes: 1,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate() - 12)
    }
  ];

  empty(main).appendChild(template(pictures));
})
