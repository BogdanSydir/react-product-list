import Joi from "joi";

const productValidator = Joi.object({
    name: Joi.string().max(20).required().messages({
        'string.empty': 'Name must have at least 3 characters',
        'string.max': 'Name cannot be longer than 20 characters'
    }),
    url: Joi.string().min(3).required().messages({
        'string.empty': 'URL must have at least 3 characters',
        'string.max': 'URL cannot be longer than 20 characters'
    }),
    count: Joi.number().min(0).required(),
    height: Joi.number().min(0).required(),
    width: Joi.number().min(0).required(),
    weight: Joi.number().min(0).required()
})

export {productValidator}