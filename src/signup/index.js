// ruta signup
var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
// ruta /signup
page('/signup', function(ctx, next) {
  title('Apigram - Signup');
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
