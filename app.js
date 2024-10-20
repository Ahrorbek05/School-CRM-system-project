const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));
app.use('/academic', require('./routes/academic'));
app.use('/students', require('./routes/students'));
app.use('/parents', require('./routes/parents'));
app.use('/events', require('./routes/events'));
app.use('/admissions', require('./routes/admissions'));
app.use('/news', require('./routes/news'));
app.use('/gallery', require('./routes/gallery'));
app.use('/contact', require('./routes/contact'));
app.use('/auth', require('./routes/auth'));

const db = require('./config/database');
mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB ulanish muvaffaqiyatli'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishga tushdi`));
