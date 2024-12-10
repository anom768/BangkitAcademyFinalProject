import quizService from "../service/quiz-service.js";
import {logger} from "../application/logging.js";

const addQuiz = async (req, res, next) => {
    try {
        const result = await quizService.addQuiz(req.body);
        res.status(200).json({
            data: result,
        });
    } catch (e) {
        next(e);
    }
}

const updateQuiz = async (req, res, next) => {
    try {
        const request = req.body;
        request.id = req.params.id;
        const result = await quizService.updateQuiz(request);
        res.status(200).json({
            data: result,
        })
    } catch (e) {
        next(e);
    }
}

const getAllQuiz = async (req, res, next) => {
    try {
        const result = await quizService.getAllQuiz();
        res.status(200).json({
            data: result,
        })
    } catch (e) {
        next(e);
    }
}

export default {
    addQuiz,
    updateQuiz,
    getAllQuiz,
}