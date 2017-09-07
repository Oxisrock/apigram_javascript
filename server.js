var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res){
  res.render('index', { title: 'Apigram' });
})

app.get('/signup', function (req, res){
  res.render('index', { title: 'Apigram - Signup' });
})

app.get('/signin', function (req, res){
  res.render('index', { title: 'Apigram - Signin' });
})


app.listen(8080, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Api levantado en el puerto 3000');
})
