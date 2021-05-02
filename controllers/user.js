const model = require('../models/user');
const validate = require('../validations/user');

function login(req , res) {
    res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    });
};


async function signup(req , res) {
    let errors = [];
    let validation = await validate(req.body);
    res.json(validation);
};

module.exports = {
    login,
    signup
}