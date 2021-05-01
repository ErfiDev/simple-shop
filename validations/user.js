const joi = require('joi');

function userValidate(data) {
    const schema = joi.object({
        name: joi.string().required().alphanum().min(4),
        email: joi.string().email().required(),
        cart: joi.object().required()
        .keys({
            items: joi.array().required().items({
                productId: joi.string().required(),
                quantity: joi.number().required()
            })
        })
    });

    return schema.validate(data);
}

module.exports = userValidate;