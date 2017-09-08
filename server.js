var express = require('express');

var multer = require('multer');

var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

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

app.get('/api/pictures', function (req, res) {
  var pictures = [
    {
      user: {
        username:'oxisrock',
        avatar: 'img/internt_web_technology-13-256.png',
      },
      url: 'img/world-of-warcraft-alliance-characters-wallpaper-3.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
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
  setTimeout(function () {
    res.send(pictures);
  }, 1000)
})

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) return res.send(500, "Error uploading file");

    res.send('File uploaded');
  })
})


var port = 8080;

app.listen(port, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log(`Api levantado en el puerto ${port}`);
})
