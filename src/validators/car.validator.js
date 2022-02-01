import Joi from "joi";

export const carValidator = Joi.object({

    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{1,10}$')).required().messages({
        'string.empty': '"model" заповніть модель авто',
        'string.pattern.base': 'Використовуй букви мін 1 макс 10'
    }),
    price: Joi.number().min(1).max(2000000).messages({
        'number.base': 'ціна від 1 до 2 000 000',
        'number.min': 'ціна більше або дорівнює 0',
        'number.max': 'ціна до 2 000 000'
    }),

    year: Joi.number().min(1990).max(2022).required().messages({
        'number.base': 'Уведіть від 1990 до 2022 року',
        'number.min': 'рік не старший 1990 року',
        'number.max': 'рік не молодший 2022'
    })


});
