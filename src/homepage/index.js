// ruta signin
var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
// var request = require('superagent');
var header = require('../header');
var axios = require('axios');
// ruta /signin
page('/', header, loadPicturesAxios, function(ctx, next) {
  title('Apigram');
  var main = document.getElementById('main-container');

  empty(main).appendChild(template(ctx.pictures));
})

function loadPicturesAxios (ctx, next) {
  axios
    .get('/api/pictures')
    .then(function (res) {
      ctx.pictures = res.data;
      next();
    })
    .catch(function (err) {
      console.log(err);
    })
}
