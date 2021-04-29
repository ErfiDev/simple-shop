const path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.find({_id: '5bab316ce0a7c75f783cb8a8'})
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb://localhost:27017/maxi',
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    ()=>{
      console.log('connecting db successfully!');
    }
  );


app.listen(3000 , ()=> console.log('server started'));