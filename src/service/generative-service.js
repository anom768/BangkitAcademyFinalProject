import {validate} from "../validation/validation.js";
import {generativeValidation} from "../validation/generative-validation.js";
import {prismaClient} from "../application/database.js";
import {re} from "prisma/build/child.js";

const generateImage = async (req) => {
    const prompt = validate(generativeValidation, req.body);
    // TODO: send prompt to ML

    const generative = {
        username: req.user.username,
        prompt: prompt.prompt,
        image: "default"
    }

    return prismaClient.generative.create({
        data: generative,
        select: {
            id: true,
            username: true,
            prompt: true,
            image: true,
        }
    })
}

// const getHistories = async (req) => {
//     return prismaClient.generative.findMany({
//         where: {
//             username: req.user.username,
//         }
//     })
// }

export default {
    generateImage,
    // getHistories
}