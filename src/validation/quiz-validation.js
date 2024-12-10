import Joi from "joi";

const addQuizValidation = Joi.object({
    image: Joi.string().max(100).required(),
    audio: Joi.string().max(100).required(),
    a: Joi.string().max(100).required(),
    b: Joi.string().max(100).required(),
    c: Joi.string().max(100).required(),
    d: Joi.string().max(100).required(),
    answer: Joi.string().max(100).required(),
});

const updateQuizValidation = Joi.object({
    id: Joi.number().required(),
    image: Joi.string().max(100).optional(),
    audio: Joi.string().max(100).optional(),
    a: Joi.string().max(100).optional(),
    b: Joi.string().max(100).optional(),
    c: Joi.string().max(100).optional(),
    d: Joi.string().max(100).optional(),
    answer: Joi.string().max(100).optional(),
})

const deleteQuizValidation = Joi.number().positive().required();

const answerQuizValidation = Joi.object({
    id: Joi.number().required(),
    answer: Joi.string().max(100).required(),
})

export {
    addQuizValidation,
    updateQuizValidation,
    deleteQuizValidation,
    answerQuizValidation,
}