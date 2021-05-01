const model = require('../models/user');

function login(req , res) {
    res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    });
};

function signup(req , res) {

};

module.exports = {
    login,
    signup
}