const express = require('express');
const app = express();
const ehbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

// handlebars setup
const ext = "hbs"; // so we don't have to use .handlebars
const hbs = ehbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials'),
    extname: ext
});
app.engine(ext, hbs.engine);
app.set('view engine', ext);
app.use(express.static(path.join(__dirname, '../public')));

// Open file so nginx knows it is running
fs.openSync('/tmp/app-initialized', 'w');

app.get('/', (req, res) => {
    res.render('index', {});
});

app.listen(3000, () => {
    console.log('server started ons port 3000');
});