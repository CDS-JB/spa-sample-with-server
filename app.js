const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/news', (req, res) =>
    res.send('<p>some text</p>')
)

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
