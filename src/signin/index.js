// ruta signin
var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
// ruta /signin
page('/signin', function(ctx, next) {
  title('Apigram - Signin');
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
