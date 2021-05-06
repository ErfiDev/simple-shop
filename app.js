require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const UserModel = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
const UserApi = require('./routes/user');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  process.env.DB,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  ()=>{
    console.log('connecting db successfully!');
  }
);

app.use(async (req, res, next) => {
  try{
    const {loggedIn , id} = req.cookies;
    if(loggedIn) return req.userId = id;
    next();
  }
  catch(err){console.log(err)}
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorController.get404);
app.use('/user/api' , UserApi);

app.listen(PORT , ()=> {
  console.log(`server started on port : ${PORT}`);
});