const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(
  'mongodb://localhost:27017/maxi',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  ()=>{
    console.log('connecting db successfully!');
  }
);

app.use((req, res, next) => {
  User.find({_id: '5bab316ce0a7c75f783cb8a8'})
    .then(user => {
      req.user = user;
      console.log(user);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorController.get404);

app.listen(PORT , ()=> {
  console.log(`server started on port : ${PORT}`);
});