var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form', function(req, res){
  res.render('form');
});

app.get('/form_receiver', function(req, res){
  var title = req.query.title;
  var desc = req.query.description;
  res.send(title+", "+desc);
});

app.post('/form_receiver', function(req, res){
  var title = req.body.title;
  var desc = req.body.description;
  res.send(title+", "+desc);
});

app.get('/template', function(req,res){
    res.render('temp', {time: Date()});
});

app.get('/', function(req, res){
  res.send('Welcome Home');
});

app.get('/topic', function(req, res){
  var topics = [
    'javascript is ...',
    'NodeJS is ...',
    'Express is ...'
  ];

  var output = `
  <a href="/topic?id=0">Javascript</a><br>
  <a href="/topic?id=1">NodeJS</a><br>
  <a href="/topic?id=2">Express</a><br>
  ${topics[req.query.id]}<br>
  `;
  res.send(output);
});

app.get('/dynamic', function(req, res){
  var lis = '';
  for (var i = 0; i < 5; i++) {
    lis = lis + '<li>coding'+i+'</li>';
  }
  var time = Date();
  var output = `
  <html>
    <body>
      hello dynamic!!!
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>`;
  res.send(output);
});

app.get('/people', function(req, res){
  res.send('Hello People, <img src="/people.png">');
});

app.get('/login', function(req, res){
  res.send('Login please');
});

app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
