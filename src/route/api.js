import express from "express";
import {authMiddleware} from "../middleware/auth-middleware.js";
import userController from "../controoler/user-controller.js";
import generativeController from "../controoler/generative-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

userRouter.post('/api/users/generate', generativeController.generateImage);
// userRouter.get('/api/users/histories', generativeController.getHistories);

// userRouter.post("/api/quiz", quizController.addQuiz);
// userRouter.put("/api/quiz/:id", quizController.updateQuiz);
// userRouter.get("/api/quiz", quizController.getAllQuiz);

export {
    userRouter,
}