const joi = require('joi');


function orderValudate(data) {
    const schema = joi.object({
        products: joi.array().required()
        .items({
            quantity: joi.number().required(),
            product: joi.object().required()
        }),

        user: joi.object().required()
        .keys({
            name: joi.string().required(),
            userId: joi.string().required()
        })
    });

    return schema.validate(data);
}

module.exports = orderValudate;