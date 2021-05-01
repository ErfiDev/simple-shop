const joi = require('joi');

function productValidate(data) {
    const schema = joi.object({
        title: joi.string().required(),
        price: joi.number().required(),
        description: joi.string().required(),
        imageUrl: joi.string().required(),
        userId: joi.string().required()
    }); 

    return schema.validate(data);
}

module.exports = productValidate;