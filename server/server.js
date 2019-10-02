const express = require('express');
const path = require('path');

const app = express();

let reqPath = path.join(__dirname, '../');

var distDir = reqPath + "\\dist\\ChangeDetection\\";
app.use(express.static(distDir));

app.set('views', distDir);

app.engine('html', require('ejs').renderFile);

app.get('*', (req, res) => {
  var nodeAppObj = { title: 'Hey', message: 'Hello there!', myAppName: 'nadeem'};
  res.render('index.html', {data: nodeAppObj});
});

app.listen(8000, () => {
  console.log('Server started!');
})
