import Joi from "joi";

const generativeValidation = Joi.object({
    prompt: Joi.string().max(200).required()
});

export {
    generativeValidation
}