const express = require('express')
const app = express()
// console.log(__dirname);

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/about', function (req, res) {
    res.sendFile('views/about.html', { root: __dirname });
});
app.get("/aboutus", (req, res) => {
    res.redirect('/about',)
})

app.listen(3000 , 'localhost', () => {
    console.log("server is listening on port 3000");
});
app.use((req, res) => {
    res.status(404).sendFile('views/404.html', { root: __dirname });
});