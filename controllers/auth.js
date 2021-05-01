exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login'
  });
};

exports.signup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'SignUp'
  });
};
