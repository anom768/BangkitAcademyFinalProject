import {validate} from "../validation/validation.js";
import {prismaClient} from "../application/database.js";
import {addQuizValidation, updateQuizValidation} from "../validation/quiz-validation.js";

const addQuiz = async (request) => {
    const quiz = validate(addQuizValidation, request);

    return prismaClient.quiz.create({
        data: quiz,
        select: {
            id: true, image: true, audio: true, a: true, b: true, c: true, d: true,
        }
    });
}

const updateQuiz = async (request) => {
    const quiz = validate(updateQuizValidation, request);
    const quizDB = await prismaClient.quiz.count({
        where: {
            id: quiz.id
        }
    })
    if (!quizDB) {
        throw new ResponseError(404, "quiz not found.");
    }
    const data = {}
    if (quiz.image) {
        data.image = quiz.image;
    }
    if (quiz.audio) {
        data.audio = quiz.audio;
    }
    if (quiz.a) {
        data.a = quiz.a;
    }
    if (quiz.b) {
        data.b = quiz.b;
    }
    if (quiz.c) {
        data.c = quiz.c;
    }
    if (quiz.d) {
        data.d = quiz.d;
    }
    if (quiz.answer) {
        data.answer = quiz.answer;
    }
    return prismaClient.quiz.update({
        where: {
            id: quiz.id,
        },
        data: data,
        select: {
            id: true, image: true, audio: true, a: true, b: true, c: true, d: true,
        }
    })
}

const getAllQuiz = async (request) => {
    return prismaClient.quiz.findMany({
        select: {
            id: true, image: true, audio: true, a: true, b: true, c: true, d: true,
        }
    })
}

export default {
    addQuiz,
    updateQuiz,
    getAllQuiz,
}